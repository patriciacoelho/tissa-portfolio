import type { Metadata } from 'next';
import { Geist_Mono, Rubik } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../providers/ThemeProvider';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const rubiktSans = Rubik({
    variable: '--font-rubik-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Tissa - Dev',
    description: 'Patricia Coelho portfolio',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning data-mode='light'>
            <body
                className={`${rubiktSans.variable} ${geistMono.variable} bg-slate-50 antialiased`}
            >
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
