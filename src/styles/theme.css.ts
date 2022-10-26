import { createTheme, createThemeContract } from "@vanilla-extract/css";

const font = {
  heading:
    "ui-serif, 'New York', 'Century Schoolbook', Times, 'Times New Roman', serif",
  body: "Inter, -apple-system, BlinkMacSystemFont, 'SF Pro Display', Helvetica, sans-serif",
};

export const vars = createThemeContract({
  color: {
    bg: "",
    fg: "",
  },
  font: {
    heading: "",
    body: "",
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    bg: "white",
    fg: "black",
  },
  font,
});

export const darkTheme = createTheme(vars, {
  color: {
    bg: "black",
    fg: "white",
  },
  font,
});
