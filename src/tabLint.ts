import { Diagnostic } from "@codemirror/lint";
import { Text } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";
import TABLint from "tablint";

export function tabLint(config?: any) {
  if (!config) {
    config = {
      instrument: { auto: true, guitar: false, drum: false, bass: false },
      rules: {}
    };
    // tblint.getRules().forEach((desc: any, name: string) => {
    //   if (desc.recommended) config.rules[name] = 2;
    // });
  }

  return (async (view: EditorView) => {
    // return tblint.verify(view.state, config)
    let { state } = view, found: Diagnostic[] = [];
    
    let stxTree = syntaxTree(state);
    let lintResults = await new TABLint().verify(state.sliceDoc(0), config, stxTree);
    for (let d of lintResults) found.push(translateDiagnostic(d, state.doc));
    return found;
  }) as (view: EditorView) => Promise<Diagnostic[]>;
}

function translateDiagnostic(input: any, doc: Text): Diagnostic {
  let start = input.idx;
  let result: Diagnostic = {
    from: start,
    to: input.endIdx ? input.endIdx : start,
    message: input.message,
    source: input.ruleId ? "tabhint:" + input.ruleId : "tabhint",
    severity: input.severity == 1 ? "warning" : "error",
  };
  if (input.fix) {
    let from = input.fix.range[0]-start;
    let to = input.fix.range[1]-start;
    result.actions = [
      {
        name: "fix",
        apply(view: EditorView, start: number) {
          view.dispatch({
            changes: { from: start + from, to: start + to, insert: input.fix.text },
            scrollIntoView: true,
          });
        },
      },
    ];
  }
  return result;
}
