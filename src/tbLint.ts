import { Diagnostic } from "@codemirror/lint";
import { Text } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tablatureLanguage } from "./tablature";
import {TabLinter} from "lint-tablature"

export function tbLint(tblint: TabLinter, config?: any) {
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
    return tblint.verify(view.state, config)
    //   found: Diagnostic[] = [];
    // for (let d of tblint.verify(state, config))
    //     found.push(translateDiagnostic(d, state.doc))
    // console.log(`completing...\nstate: ${state}`);
    // for (let { from, to } of tablatureLanguage.findRegions(state)) {
    //   let fromLine = state.doc.lineAt(from),
    //     offset = {
    //       line: fromLine.number - 1,
    //       col: from - fromLine.from,
    //       pos: from,
    //     };
    //   for (let d of tblint.verify(state.sliceDoc(from, to), config))
    //     found.push(translateDiagnostic(d, state.doc, offset));
    // }
    // return found;
  }) as (view: EditorView) => any[];
}

// function mapPos(
//   line: number,
//   col: number,
//   doc: Text,
//   offset: { line: number; col: number; pos: number }
// ) {
//   return (
//     doc.line(line + offset.line).from + col + (line == 1 ? offset.col - 1 : -1)
//   );
// }

// function translateDiagnostic(
//   input: any,
//   doc: Text,
//   offset: { line: number; col: number; pos: number }
// ): Diagnostic {
//   let start = mapPos(input.line, input.column, doc, offset);
//   let result: Diagnostic = {
//     from: start,
//     to:
//       input.endLine != null && input.endColumn != 1
//         ? mapPos(input.endLine, input.endColumn, doc, offset)
//         : start,
//     message: input.message,
//     source: input.ruleId ? "jshint:" + input.ruleId : "jshint",
//     severity: input.severity == 1 ? "warning" : "error",
//   };
//   if (input.fix) {
//     let { range, text } = input.fix,
//       from = range[0] + offset.pos - start,
//       to = range[1] + offset.pos - start;
//     result.actions = [
//       {
//         name: "fix",
//         apply(view: EditorView, start: number) {
//           view.dispatch({
//             changes: { from: start + from, to: start + to, insert: text },
//             scrollIntoView: true,
//           });
//         },
//       },
//     ];
//   }
//   return result;
// }
