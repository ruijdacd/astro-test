import { style } from "@vanilla-extract/css";

export const root = style({
  padding: "1rem",
  display: "grid",
  gridAutoFlow: "row",
  placeItems: "center",
  gap: "1rem",
});
export const nav = style({
  display: "flex",
  gap: "1rem",
});
