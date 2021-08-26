import { parser } from "./parser.js";
import { styleTags } from "@codemirror/highlight";
import tags from "./custom-style-tags";
import { LRLanguage, LanguageSupport } from "@codemirror/language";

//to know how to set up the style tags and code completion, see
//https://codemirror.net/6/examples/lang-package/

let parserWithMetadata = parser.configure({
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
});

export const tablatureLanguage = LRLanguage.define({
  parser: parserWithMetadata,
  languageData: {
    commentTokens: { line: "#" },
  },
});

export function tablature() {
  return new LanguageSupport(tablatureLanguage);
}

export const tabTags = tags;