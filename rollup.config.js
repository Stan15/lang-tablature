import { nodeResolve } from "@rollup/plugin-node-resolve";
// import fs from "fs";

export default {
  input: "src/index.js",
  output: [
    {file: "dist/index.cjs", format: "cjs"},
    {dir: "./dist", format: "es"},
  ],
  external: (id) => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
  lezer: [
    nodeResolve()
  ],
};

// function copyAndWatch(fileIn, fileOut) {
//   return {
//     name: "copy-and-watch",
//     async buildStart() {
//       this.addWatchFile(fileIn);
//     },
//     async generateBundle() {
//       this.emitFile({
//         type: "asset",
//         fileName: fileOut,
//         source: fs.readFileSync(fileIn),
//       });
//     },
//   };
// }
