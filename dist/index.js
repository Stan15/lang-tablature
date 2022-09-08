import { parser } from 'parser-tablature';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { TabLanguage, TabParserImplement, TabLanguageSupport } from 'tab-ast';

const rawTabLanguage = LRLanguage.define({
    parser: parser.configure({
        props: []
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
