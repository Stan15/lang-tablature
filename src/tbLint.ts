import { Diagnostic } from "@codemirror/lint";
import { Text } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import TABLint from "tablint"

export function tbLint(config?: any) {
  if (!config) {
    config = {
      parserOptions: { auto: true, guitar: false, drum: false, bass: false },
      rules: {},
    };
    // tblint.getRules().forEach((desc: any, name: string) => {
    //   if (desc.recommended) config.rules[name] = 2;
    // });
  }

  return ((view: EditorView) => {
    // return tblint.verify(view.state, config)
    let {state} = view, found: Diagnostic[] = [];
    let lintResults = TABLint.lint(state.sliceDoc(0), config)
    for (let d of lintResults)
        found.push(translateDiagnostic(d, state.doc))
    return found;
  }) as (view: EditorView) => any[];
}

function translateDiagnostic(
  input: any,
  doc: Text
): Diagnostic {
  let start = input.idx;
  let result: Diagnostic = {
    from: start,
    to: input.endIdx ? input.endIdx : start,
    message: input.message,
    source: input.ruleId ? "tabhint:" + input.ruleId : "tabhint",
    severity: input.severity == 1 ? "warning" : "error",
  };
  if (input.fix) {
    let { range, text } = input.fix,
      from = range[0],
      to = range[1];
    result.actions = [
      {
        name: "fix",
        apply(view: EditorView, start: number) {
          view.dispatch({
            changes: { from: start + from, to: start + to, insert: text },
            scrollIntoView: true,
          });
        },
      },
    ];
  }
  return result;
}
