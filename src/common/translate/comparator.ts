import eventBus from "../event-bus";
import { Compound } from "./compound";
import { SharedResult, emptySharedDiff } from "./types";
import { TranslatorType } from "@/common/types";
import store from "@/store";
import config from "../configuration";
const Diff = require("diff");

export interface CompareResult {
  engine: string;
  parts: any;
}

export class Comparator {
  compound: Compound;
  constructor(compound: Compound) {
    this.compound = compound;
    eventBus.on("allTranslated", () => {
      if (!config.get<boolean>("multiSource")) {
        return;
      }
      const resultBuffer = this.compound.resultBuffer.resultBufferMap;
      let results = new Map<TranslatorType, SharedResult>();
      resultBuffer.forEach(function (value, key, map) {
        if (!!value) {
          results.set(key, value);
        }
      });
      this.compareAll(results);
    });
  }

  clear() {
    store.dispatch("setDiff", emptySharedDiff());
  }

  compareAll(results: Map<TranslatorType, SharedResult>) {
    let engines = [...results.keys()];
    engines.sort();
    let anchor = this.compound.mainEngine;
    if (!engines.includes(anchor)) {
      anchor = engines[0];
    }
    engines[engines.indexOf(anchor)] = engines[0]; //换一下位置
    engines[0] = anchor;
    let anchorResult = results.get(anchor) as SharedResult;
    const compareResults: CompareResult[] = [];
    for (let engine of engines) {
      let parts: any = undefined;
      if (engine == anchor) {
        parts = this.compare(
          results.get(engines[1]) as SharedResult,
          anchorResult
        );
      } else {
        let targetResult = results.get(engine) as SharedResult;
        parts = this.compare(anchorResult, targetResult);
      }

      compareResults.push({
        engine,
        parts: parts,
      });
    }
    store.dispatch("setDiff", {
      text: this.compound.text,
      allParts: compareResults,
    });
  }

  compare(anchorResult: SharedResult, targetResult: SharedResult) {
    let anchorParas = anchorResult.transPara;
    let targetParas = targetResult.transPara;
    let all_parts = [];
    if (anchorParas.length != targetParas.length) {
      anchorParas = [anchorResult.translation];
      targetParas = [targetResult.translation];
    }
    for (let i = 0; i < anchorParas.length; i++) {
      let diffParts = Diff.diffWords(anchorParas[i], targetParas[i]);
      diffParts = diffParts.filter((p: any) => !p.removed);
      all_parts.push(diffParts);
    }
    return all_parts;
  }
}
