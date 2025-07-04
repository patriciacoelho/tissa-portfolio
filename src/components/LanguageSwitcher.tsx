'use client';

import React from 'react';
import { useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useRouter } from 'next/navigation';

export function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const changeLanguage = (lng: string) => {
        const locale = lng as Locale;
        startTransition(() => {
            setUserLocale(locale);
            router.refresh();
        });
    };

    return (
        <div>
            <button
                type='button'
                className={isPending ? 'pointer-events-none' : ''}
                onClick={() => changeLanguage('pt-br')}
            >
                🇧🇷 Português
            </button>
            <button
                type='button'
                className={isPending ? 'pointer-events-none opacity-60' : ''}
                onClick={() => changeLanguage('en')}
            >
                🇺🇸 English
            </button>
        </div>
    );
}
