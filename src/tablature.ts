import { parser } from "parser-tablature";
import { styleTags } from "@codemirror/highlight";
import {
  LanguageSupport, LRLanguage
} from "@codemirror/language";
import { tabTags as tags } from "./style-tags";

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

export function tablature() {
  return new LanguageSupport(tablatureLanguage);
}
