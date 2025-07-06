import Image from 'next/image';
import styles from '../cards.module.css';
import { ExternalLink } from 'lucide-react';

export default async function LandingPageSysvaleCard() {
    return (
        <div className='z-10 flex w-full flex-col gap-3'>
            <div className='flex items-center justify-between gap-3'>
                <div
                    className={`flex cursor-pointer gap-1 text-2xl font-bold text-(--lp-sysvale-title-color) hover:underline dark:text-white`}
                >
                    Landing Page - Sysvale
                </div>
                <a
                    className='project-link flex cursor-pointer items-center gap-1 rounded-md bg-none px-4 py-2 text-sm text-violet-500 hover:bg-violet-200'
                    href='https://sysvale.com/'
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
                        src='/images/sysvale.svg'
                        alt='Project image'
                        width={487}
                        height={295}
                    />
                </div>
                <div
                    className={`${styles.portfolio__lp_sysvale_card} relative flex h-auto w-full flex-col justify-center gap-4 overflow-hidden rounded-2xl px-8 py-8 lg:h-[360px] lg:px-12 lg:py-4`}
                >
                    <Image
                        src='/images/sysvale-logo.svg'
                        alt='Project logo'
                        width={150}
                        height={35}
                    />
                    <div className='z-10 text-sm text-white lg:w-[50%]'>
                        I contributed to the development of the company’s
                        institutional landing page, working closely with the
                        design and marketing crews to clearly communicate the
                        brand’s value proposition through a visually appealing
                        experience. I was responsible for implementing a
                        responsive and accessible interface, integrating
                        internal services, and ensuring design fidelity. The
                        project followed clean code practices to ensure
                        performance, scalability, and maintainability.
                    </div>
                    <span>
                        <strong>Tech stack: </strong>
                        Nuxt (Vue.js), HTML5, SCSS, JavaScript, Git.
                    </span>
                </div>
            </div>
        </div>
    );
}
