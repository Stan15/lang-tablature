import { parser } from "./parser.js";
import { styleTags, tags as t } from "@codemirror/highlight";
import { LRLanguage, LanguageSupport } from "@codemirror/language";

//to know how to set up the style tags and code completion, see
//https://codemirror.net/6/examples/lang-package/

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      Fret: t.integer,
      MeasureLineName: t.name,
      Comment: t.comment
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
