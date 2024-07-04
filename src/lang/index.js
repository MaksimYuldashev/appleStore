import { createI18n } from "vue-i18n";
import en from './en.json'
import ru from './ru.json'
import uzb from './uzb.json'
const messages = {
    en,
    ru,
    uzb,
};

const i18n = createI18n({
    locale: "ru",
    fallbackLocale: "en",
    messages,
});

export default i18n;