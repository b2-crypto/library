export declare function useWithrawTemplates(
  productId?: number,
  providerId?: number,
): {
  templates: import('../../../types').TemplateType[];
  templateInfo: Record<string, string> | undefined;
  templatesLoading: boolean;
  templateInfoLoading: boolean;
  requireWhitelistedAddress: boolean | undefined;
  allowedAddressOptions:
    | {
        value: string;
        title: string;
        disabled: boolean;
      }[]
    | undefined;
};
