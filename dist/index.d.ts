import { LanguageSupport } from '@codemirror/language';
import { TabLanguageSupport } from 'tab-ast';

declare function tablatureAST(): TabLanguageSupport;
declare function rawTablature(): LanguageSupport;

export { rawTablature, tablatureAST };
