import Image from 'next/image';
import styles from '../cards.module.css';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CuidaDesignSystemCard() {
    const t = useTranslations();

    return (
        <div className='z-10 flex w-full flex-col gap-3'>
            <div className='flex items-center justify-between gap-3'>
                <div
                    className={`flex cursor-pointer gap-1 text-2xl font-bold text-(--cuida-ds-title-color) hover:underline dark:text-white`}
                >
                    {t('portfolio.cuida.title')}
                </div>
                <a
                    className='project-link flex cursor-pointer items-center gap-1 rounded-md bg-none px-4 py-2 text-sm text-violet-500 hover:bg-violet-200 dark:hover:bg-gray-800 dark:hover:text-white'
                    href='https://cuida.framer.wiki/'
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
                <div className='absolute top-[-8px] right-0 z-10 hidden lg:block'>
                    <Image
                        className='h-[339px] w-[560px]'
                        src='/images/cuida.svg'
                        alt={t('portfolio.cuida.alt_image')}
                        width={487}
                        height={295}
                    />
                </div>
                <div
                    className={`${styles.portfolio__cuida_ds} relative flex h-auto w-full flex-col justify-center gap-4 overflow-hidden rounded-2xl px-8 py-8 lg:h-[360px] lg:px-12 lg:py-4`}
                >
                    <Image
                        src='/images/cuida-logo.svg'
                        alt={t('portfolio.cuida.alt_logo')}
                        width={150}
                        height={35}
                    />
                    <div className='z-10 text-sm text-gray-900 lg:w-[50%]'>
                        {t('portfolio.cuida.summary')}
                    </div>
                    <span className='text-gray-900'>
                        <strong>{t('common.tech_stack')}: </strong>
                        {t('portfolio.cuida.tech_stack')}
                    </span>
                    <div
                        className={`${styles.portfolio__cuida_ds__light_effect} hidden sm:block`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
