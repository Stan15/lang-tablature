import { parser } from 'parser-tablature';
import { Tag, tags, styleTags } from '@codemirror/highlight';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { TabLanguage, TabParserImplement, TabLanguageSupport } from 'tab-ast';

const tabTags = {
    fret: Tag.define(tags.integer),
    measurelineName: Tag.define(tags.propertyName),
    technique: Tag.define(tags.arithmeticOperator),
    embellishment: Tag.define(tags.bitwiseOperator),
    delimiter: Tag.define(tags.separator),
    multiplier: Tag.define(tags.updateOperator),
    attribution: Tag.define(tags.documentMeta),
    modifier: Tag.define(tags.annotation),
    comment: tags.comment,
};

const rawTabLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            styleTags({
                "Fret": tabTags.fret,
                "Grace Harmonic": tabTags.embellishment,
                "Hammer Pull Slide": tabTags.technique,
                "StaffLine/MeasureLineName": tabTags.measurelineName,
                "StaffLine/Multiplier": tabTags.multiplier,
                Comment: tabTags.comment,
                delim: tabTags.delimiter,
            }),
        ]
    }),
});
const tablatureASTLanguage = TabLanguage.define({
    parser: new TabParserImplement()
});
function tablatureAST() {
    return new TabLanguageSupport(tablatureASTLanguage, rawTablature());
}
function rawTablature() {
    return new LanguageSupport(rawTabLanguage);
}

export { rawTablature, tablatureAST };
//# sourceMappingURL=index.js.map
