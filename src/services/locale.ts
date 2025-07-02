'use server';

import { cookies } from 'next/headers';
import { Locale, defaultLocale, locales } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'TISSA_PAGE_LOCALE';

export async function getUserLocale(): Promise<Locale> {
    const cookie = (await cookies()).get(COOKIE_NAME)?.value;

    if (cookie && [...locales].includes(cookie as Locale)) {
        return cookie as Locale;
    }

    return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}
