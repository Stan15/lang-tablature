import { parser } from "parser-tablature";
import {
  LRLanguage,
  LanguageSupport,
  delimitedIndent,
  flatIndent,
  continuedIndent,
  indentNodeProp,
  foldNodeProp,
  foldInside,
} from "@codemirror/language";
import { styleTags } from "@codemirror/highlight";
import { tabTags as tags } from "./style-tags";
import { completeFromList, ifNotIn } from "@codemirror/autocomplete";
import { snippets } from "./snippets";
import { tbLint } from "./tbLint";

export const tablatureLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "Fret": tags.fret,
        "Grace Harmonic": tags.embellishment,
        "Hammer Pull Slide": tags.technique,
        "StaffLine/MeasureLineName": tags.measurelineName,
        "StaffLine/Multiplier": tags.multiplier,
        Comment: tags.comment,
        delim: tags.delimiter,
      }),
    ]
  }),
});

export const tabLinter = tablatureLanguage.data.of({linter: tbLint})

export function tablature() {
  return new LanguageSupport(tablatureLanguage, tabLinter);
}
