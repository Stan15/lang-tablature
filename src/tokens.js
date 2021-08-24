import { ExternalTokenizer } from "@lezer/lr";
import {
  extSpaces,
  newline as newlineToken,
  eof,
  newlineEmpty,
  incomingNewline,
  incomingEOF
} from "./parser.terms.js";

const newline = 10,
  carriageReturn = 13,
  space = 32,
  tab = 9;

export const externSpaces = new ExternalTokenizer((input) => {
  let spaceExists = false;
  while (input.next == space || input.next == tab) {
    input.advance();
    spaceExists = true;
  }
  if (spaceExists) input.acceptToken(extSpaces);
});

export const newlines = new ExternalTokenizer((input) => {
  if (input.next < 0) {
    input.acceptToken(eof);
  } else if (input.next != newline && input.next != carriageReturn) {
  } else {
    // this if statement handles the CRLF line ending
    if (input.next == carriageReturn) {
      input.advance();
      if (input.next != newline) return;
    }
    input.advance();
    let spaces = 0;
    while (input.next == space || input.next == tab) {
      input.advance();
      spaces++;
    }
    let empty = input.next == newline || input.next == carriageReturn;
    input.acceptToken(empty ? newlineEmpty : newlineToken, empty ? 1 : 0);
  }
});

export const lookaheads = new ExternalTokenizer((input) => {
  if (input.next < 0) {
    input.acceptToken(incomingEOF);
  } else if (input.next == newline || input.next == carriageReturn) {
    input.acceptToken(incomingNewline);
  }
});
