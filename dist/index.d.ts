import { LRLanguage, LanguageSupport } from '@codemirror/language';

declare const tablatureLanguage: LRLanguage;
declare function tablature(): LanguageSupport;

export { tablature, tablatureLanguage };
