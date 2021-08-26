import * as _codemirror_highlight from '@codemirror/highlight';
import { LRLanguage, LanguageSupport } from '@codemirror/language';

declare const tablatureLanguage: LRLanguage;
declare function tablature(): LanguageSupport;
declare const tabTags: {
    fret: _codemirror_highlight.Tag;
    measurelineName: _codemirror_highlight.Tag;
    technique: _codemirror_highlight.Tag;
    embellishment: _codemirror_highlight.Tag;
    delimiter: _codemirror_highlight.Tag;
    multiplier: _codemirror_highlight.Tag;
    attribution: _codemirror_highlight.Tag;
    modifier: _codemirror_highlight.Tag;
    comment: _codemirror_highlight.Tag;
};

export { tabTags, tablature, tablatureLanguage };
