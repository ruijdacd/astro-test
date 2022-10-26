import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "../styles/theme.css";

export const root = style({
  fontFamily: vars.font.heading,
  color: vars.color.fg,
});

export const size = styleVariants({
  small: { fontSize: "1.5rem" },
  medium: { fontSize: "2rem" },
  large: { fontSize: "3rem" },
});
