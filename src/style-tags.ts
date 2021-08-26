import { Tag, tags as t } from "@codemirror/highlight"

export const tabTags = {
  fret: Tag.define(t.integer),
  measurelineName: Tag.define(t.propertyName),
  technique: Tag.define(t.arithmeticOperator),
  embellishment: Tag.define(t.bitwiseOperator),
  delimiter: Tag.define(t.separator),
  multiplier: Tag.define(t.updateOperator),
  attribution: Tag.define(t.documentMeta),
  modifier: Tag.define(t.annotation),   //TimeSig and Repeat add attributes to the measures
  comment: t.comment,
};
