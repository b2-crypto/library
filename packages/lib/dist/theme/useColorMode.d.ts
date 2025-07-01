export declare function useColorMode(): {
  colorMode: string | null | undefined;
  userColorMode: string | undefined;
  setColorMode: (
    value:
      | string
      | ((current: string | undefined) => string | undefined)
      | undefined,
  ) => void;
};
