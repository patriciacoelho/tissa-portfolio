'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import Logo from './Logo';
import ContactAction from './ContactAction';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Navbar() {
    const t = useTranslations();
    const pathname = usePathname();

    return (
        <nav className='z-10 flex w-full max-w-[1920px] flex-col items-center justify-between justify-self-center sm:mr-auto sm:ml-auto sm:w-4/5 sm:flex-row'>
            <Logo />
            <div className='mt-6 flex items-center gap-2 self-center sm:mt-0 sm:gap-8'>
                <Link
                    aria-current='page'
                    href='/'
                    className={`${pathname === '/' ? 'text-purple-700' : ''} router-link-active router-link-exact-active active-nav-item flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500`}
                >
                    <span>{t('navbar.home')}</span>
                    <div
                        className={`${pathname !== '/' ? 'hidden' : ''} border-radius-full h-[3px] w-1/3 bg-violet-500`}
                    />
                </Link>
                <Link
                    href='/portfolio'
                    className={`${pathname === '/portfolio' ? 'text-purple-700' : ''} flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500`}
                >
                    <span>{t('navbar.portfolio')}</span>
                    <div
                        className={`${pathname !== '/portfolio' ? 'hidden' : ''} border-radius-full h-[3px] w-1/3 bg-violet-500`}
                    />
                </Link>
            </div>
            <div className='absolute top-[28px] right-[16px] flex flex-wrap sm:relative sm:top-0 sm:right-0'>
                <LanguageSwitcher className='mb-2' />
                <ContactAction className='mb-2' />
            </div>
        </nav>
    );
}
