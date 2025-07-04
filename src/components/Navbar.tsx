// import Link from 'next/link';
import Image from 'next/image';
// import { getTranslations } from 'next-intl/server';

export default async function Navbar() {
    // const t = await getTranslations();

    return (
        <nav className='z-10 flex w-4/5 w-full max-w-[1920px] items-center justify-between justify-self-center'>
            <Image
                className='cursor-pointer'
                src='/images/tissa.svg'
                alt='logo'
                width={75}
                height={32}
            />
            <div className='color-neutral flex items-center gap-8'>
                {/* <Link
                    aria-current='page'
                    href='/'
                    className='router-link-active router-link-exact-active active-nav-item flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500'
                >
                    <span>{t('common.home')}</span>
                    <div className='border-radius-full h-[3px] w-1/3 bg-violet-500'></div>
                </Link>
                <a
                    href='/portfolio'
                    className='flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500'
                >
                    <span>Portfolio</span>
                </a> */}
            </div>
            {/* <button
                type='button'
                className='me-2 mb-2 rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-br hover:shadow-lg hover:shadow-violet-200 focus:ring-4 focus:ring-violet-300 focus:outline-none dark:focus:ring-violet-800'
            >
                Contact me
            </button> */}
        </nav>
    );
}
