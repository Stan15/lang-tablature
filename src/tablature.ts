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

export const tablatureLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        "MeasureLine/Fret": tags.fret,
        "StaffLine/MeasureLineName": tags.measurelineName,
        Comment: tags.comment,
        "MeasureLine/Hammer MeasureLine/Pull MeasureLine/Slide": tags.technique,
        "MeasureLine/Grace MeasureLine/Harmonic": tags.embellishment,
        "StaffLine/Multiplier": tags.multiplier,
        delim: tags.delimiter,
      }),
    ],
  }),
});

export function tablature() {
  return new LanguageSupport(tablatureLanguage);
}
