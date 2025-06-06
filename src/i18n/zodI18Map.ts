import i18next from 'i18next';
import { z, ZodIssueCode } from 'zod';
export const zodI18nCustomMap: z.ZodErrorMap = (issue, ctx) => {
    console.log("i18next", i18next)
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            return { message: i18next.t('required') };
        case ZodIssueCode.invalid_string:
            if (issue.validation === 'email') {
                console.log(i18next.t('invalid_email'))
                return { message: i18next.t('invalid_email') };
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === 'string') {
                return {
                    message: i18next.t('min_length', { min: issue.minimum }),
                };
            }
            break;
    }
    return { message: ctx.defaultError };
};