import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { z } from 'zod';
import { zodI18nCustomMap } from './zodI18Map';

import enTranslation from './en/translation.json';
import ptTranslation from './pt/translation.json';


i18next.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: enTranslation,
        },
        pt: {
            translation: ptTranslation,
        }
    },
});

z.setErrorMap(zodI18nCustomMap);