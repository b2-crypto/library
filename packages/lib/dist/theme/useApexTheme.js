import { useMemo } from "react";
import { createApexTheme } from "./theme";
export function useApexTheme(colors) {
    return useMemo(() => createApexTheme(colors), [colors]);
}
