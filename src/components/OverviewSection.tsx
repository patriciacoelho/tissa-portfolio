import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OverviewSection() {
    const t = useTranslations();

    return (
        <div className='mt-12 ml-0 flex max-w-[520px] flex-col gap-3 lg:mt-5 lg:ml-auto'>
            <div className='relative flex flex-col items-start text-6xl font-black'>
                <h1 className='color-neutral z-10'>
                    Patricia <br /> Coelho
                </h1>
                <span className='color-neutral-light z-10 mt-2 text-xl font-light'>
                    {t('common.frontend_developer')} |{' '}
                    {t('common.fullstack_developer')}
                </span>
            </div>
            <div className='color-neutral mt-8 w-full text-xl font-light'>
                {t('overview.summary_paragraph')}
            </div>
            <div className='mt-10 flex w-full gap-5'>
                <a
                    className='z-50 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 outline-0 hover:shadow-lg hover:shadow-purple-100 hover:outline-1 hover:outline-purple-400 dark:bg-gray-800 dark:hover:shadow-purple-900'
                    href='https://www.linkedin.com/in/patricia-coelhoo/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <Image
                        src='/images/linkedin.svg'
                        alt='LinkedIn'
                        width={34}
                        height={34}
                    />
                    <span className='color-neutral-dark'>
                        {t('common.linkedin')}
                    </span>
                </a>
                <a
                    className='z-50 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 outline-0 hover:shadow-lg hover:shadow-purple-100 hover:outline-1 hover:outline-purple-400 dark:bg-gray-800 dark:hover:shadow-purple-900'
                    href='https://github.com/patriciacoelho'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <Image
                        src='/images/github.svg'
                        alt='GitHub'
                        width={34}
                        height={34}
                    />
                    <span className='color-neutral-dark'>
                        {t('common.github')}
                    </span>
                </a>
            </div>
        </div>
    );
}
