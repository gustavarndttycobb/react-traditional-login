import i18next from 'i18next';
import { z, ZodIssueCode } from 'zod';
export const zodI18nCustomMap: z.ZodErrorMap = (issue, ctx) => {
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            return { message: i18next.t('required') };
        case ZodIssueCode.invalid_string:
            if (issue.validation === 'email') {
                return { message: i18next.t('zod.invalid_email') };
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === 'string') {
                return {
                    message: i18next.t('zod.min_length', { min: issue.minimum }),
                };
            }
            break;
    }
    return { message: ctx.defaultError };
};