import { parser } from "parser-tablature";
import { styleTags } from "@codemirror/highlight";
import { LanguageSupport, LRLanguage } from "@codemirror/language";
import { TabLanguage, TabLanguageSupport, TabParserImplement } from "tab-ast";
import { tabTags as tags } from "./style-tags";

export const rawTabLanguage = LRLanguage.define({
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

export const tablatureLanguage = TabLanguage.define({
  parser: new TabParserImplement()
});

export function tablature() {
  return new TabLanguageSupport(tablatureLanguage, rawTabLanguage);
}