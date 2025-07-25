'use client';

import React from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() =>
                theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            className='absolute bottom-32 rounded-sm bg-gray-800 px-8 py-2 text-2xl text-white transition-all duration-100 hover:bg-gray-600 md:text-4xl dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300'
        >
            Toggle Mode
        </button>
    );
};

export default ThemeSwitcher;
