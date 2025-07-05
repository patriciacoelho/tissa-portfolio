'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Logo() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Image
            className='cursor-pointer'
            src={
                mounted && theme === 'dark'
                    ? '/images/tissa-white.svg'
                    : '/images/tissa.svg'
            }
            alt='Tissa developer'
            width={75}
            height={32}
        />
    );
}
