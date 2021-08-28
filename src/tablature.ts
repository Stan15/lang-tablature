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
        "Dash": tags.fret
      }),
    ]
  }),
});

export function tablature() {
  return new LanguageSupport(tablatureLanguage);
}
