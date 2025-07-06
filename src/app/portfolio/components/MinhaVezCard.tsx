import Image from 'next/image';
import styles from '../cards.module.css';
import { ExternalLink } from 'lucide-react';

export default async function MinhaVezCard() {
    return (
        <div className='z-10 flex w-full flex-col gap-3'>
            <div className='flex items-center justify-between gap-3'>
                <div
                    className={`flex cursor-pointer gap-1 text-2xl font-bold text-(--minha-vez-title-color) hover:underline dark:text-white`}
                >
                    Minha Vez
                </div>
                <a
                    className='project-link flex cursor-pointer items-center gap-1 rounded-md bg-none px-4 py-2 text-sm text-violet-500 hover:bg-violet-200 dark:hover:bg-gray-800 dark:hover:text-white'
                    href='https://minhavez.com.br'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <span className='hidden lg:block'>See project</span>
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
                        src='/images/minha-vez.svg'
                        alt='Project image'
                        width={487}
                        height={295}
                    />
                </div>
                <div
                    className={`${styles.portfolio__minha_vez} relative flex h-auto w-full flex-col justify-center gap-4 overflow-hidden rounded-2xl px-8 py-8 lg:h-[360px] lg:px-12 lg:py-4`}
                >
                    <Image
                        src='/images/minha-vez-logo.svg'
                        alt='Project logo'
                        width={150}
                        height={35}
                    />
                    <div className='z-10 text-sm text-gray-900 lg:w-[50%]'>
                        Minha Vez is a dashboard for managing service queues,
                        allowing teams to efficiently prioritize daily calls. I
                        worked primarily on the front-end, applying UI patterns
                        and writing unit tests with Vitest to ensure quality and
                        maintainability. I also mentored junior developers
                        during the project, contributing to a strong
                        collaborative environment and consistent delivery.
                    </div>
                    <span className='text-gray-900'>
                        <strong>Tech stack: </strong>
                        Vue.js, Vitest, JavaScript, HTML5, SCSS, Laravel,
                        MongoDB, Git.
                    </span>
                    <div
                        className={`${styles.portfolio__minha_vez__light_effect} hidden sm:block`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
