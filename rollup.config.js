import typescript from "rollup-plugin-ts";
import dts from "rollup-plugin-dts";
import {lezer} from "lezer-generator/rollup"

export default [
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.cjs", format: "cjs" },
      { dir: "./dist", format: "es" },
    ],
    external: (id) => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
    plugins: [lezer(), typescript()],
  },
  {
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts" }],
    plugins: [dts()],
  },
];
