'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function LanguageSwitcher(props: { className: string }) {
    const t = useTranslations();

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [locale, setLocale] = useState<Locale>();

    useEffect(() => {
        setCurrentLocale();
    }, []);

    const setCurrentLocale = () => {
        if (typeof document !== 'undefined') {
            const COOKIE_NAME = 'TISSA_PAGE_LOCALE';
            const value = '; ' + document.cookie;
            const parts = value.split('; ' + COOKIE_NAME + '=');

            if (parts.length == 1) {
                const locale = 'en';
                setUserLocale(locale);
                setLocale(locale);
                return;
            }

            const lng = parts.pop()?.split(';').shift();
            if (lng) {
                setLocale(lng as Locale);
            }
        }
    };

    const changeLanguage = (lng: string) => {
        const locale = lng as Locale;
        startTransition(() => {
            setUserLocale(locale);
            setLocale(locale);
            router.refresh();
        });
    };

    return (
        <span
            className={`${props.className} ${!locale ? 'animate-pulse' : ''} right-1 mr-2 flex flex-row items-center rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
        >
            <button
                onClick={() => changeLanguage('en')}
                className={`${isPending ? 'pointer-events-none' : ''} ${locale == 'en' ? 'border border-gray-300 bg-gray-300 dark:text-gray-700' : 'cursor-pointer'} flex flex-row items-center rounded-full p-3 text-sm font-medium text-gray-700 focus:outline-none dark:text-gray-100`}
            >
                <span className='text-md'>EN</span>
                <span className='ml-1'>
                    <Image
                        src='/images/en.png'
                        className='h-5 w-5'
                        width={16}
                        height={16}
                        alt={t('common.english_language')}
                    />
                </span>
            </button>

            <button
                onClick={() => changeLanguage('pt-br')}
                className={`${isPending ? 'pointer-events-none' : ''} ${locale == 'pt-br' ? 'border border-gray-300 bg-gray-300 dark:text-gray-700' : 'cursor-pointer'} flex flex-row items-center rounded-full p-3 text-sm font-medium text-gray-700 focus:outline-none dark:text-gray-100`}
            >
                <span className='text-md'>BR</span>
                <span className='ml-1'>
                    <Image
                        src='/images/pt_br.png'
                        className='h-5 w-5'
                        width={16}
                        height={16}
                        alt={t('common.portuguese_language')}
                    />
                </span>
            </button>
        </span>
    );
}
