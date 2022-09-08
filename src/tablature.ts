import { parser } from "parser-tablature";
import { LanguageSupport, LRLanguage } from "@codemirror/language";
import { TabLanguage, TabLanguageSupport, TabParserImplement } from "tab-ast";

export const rawTabLanguage = LRLanguage.define({
  parser: parser.configure({
    props: []
  }),
});

export const tablatureASTLanguage = TabLanguage.define({
  parser: new TabParserImplement()
});

export function tablatureAST() {
  return new TabLanguageSupport(tablatureASTLanguage, rawTablature());
}

export function rawTablature() {
  return new LanguageSupport(rawTabLanguage);
}