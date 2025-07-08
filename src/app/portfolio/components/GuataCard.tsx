import Image from 'next/image';
import styles from '../cards.module.css';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function GuataCard() {
    const t = useTranslations();

    return (
        <div className='z-10 flex w-full flex-col gap-3'>
            <div className='flex items-center justify-between gap-3'>
                <div
                    className={`flex cursor-pointer gap-1 text-2xl font-bold text-(--guata-title-color) hover:underline dark:text-white`}
                >
                    {t('portfolio.guata.title')}
                </div>
                <a
                    className='project-link flex cursor-pointer items-center gap-1 rounded-md bg-none px-4 py-2 text-sm text-violet-500 hover:bg-violet-200 dark:hover:bg-gray-800 dark:hover:text-white'
                    href='https://youtu.be/bS17Sh5wAEA'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <span className='hidden lg:block'>
                        {t('common.see_project')}
                    </span>
                    <ExternalLink
                        className='iconify i-uil:arrow-up-right ml-1 size-[24px] lg:size-[18px]'
                        size={18}
                    />
                </a>
            </div>
            <div className='relative h-auto w-full lg:h-[360px]'>
                <div className='absolute top-[-16px] right-[32px] z-10 hidden lg:block'>
                    <Image
                        className='h-[400px] w-auto'
                        src='/images/guata.svg'
                        alt={t('portfolio.guata.alt_image')}
                        width={487}
                        height={295}
                    />
                </div>
                <div
                    className={`${styles.portfolio__guata} relative flex h-auto w-full flex-col justify-center gap-4 overflow-hidden rounded-2xl px-8 py-8 lg:h-[360px] lg:px-12 lg:py-4`}
                >
                    <Image
                        src='/images/guata-logo.svg'
                        alt={t('portfolio.guata.alt_logo')}
                        width={150}
                        height={35}
                    />
                    <div className='z-10 text-sm text-white lg:w-[50%]'>
                        {t('portfolio.guata.summary')}
                    </div>
                    <span className='text-white'>
                        <strong>{t('common.tech_stack')}: </strong>
                        {t('portfolio.guata.tech_stack')}
                    </span>
                </div>
            </div>
        </div>
    );
}
