import { useMemo } from "react";
import { createApexTheme, Theme } from "./theme";

export function useApexTheme(colors: Theme['colors']) {
  return useMemo(() => createApexTheme(colors), [colors]);
}