import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare const tablatureLanguage: LRLanguage;
declare function tablature(): LanguageSupport;
declare const tabTags: {
    fret: import("@codemirror/highlight").Tag;
    measurelineName: import("@codemirror/highlight").Tag;
    technique: import("@codemirror/highlight").Tag;
    embellishment: import("@codemirror/highlight").Tag;
    delimiter: import("@codemirror/highlight").Tag;
    multiplier: import("@codemirror/highlight").Tag;
    attribution: import("@codemirror/highlight").Tag;
    modifier: import("@codemirror/highlight").Tag;
    comment: import("@codemirror/highlight").Tag;
};
export { tablatureLanguage, tablature, tabTags };
