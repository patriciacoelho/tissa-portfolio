import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CoverSection() {
    const t = useTranslations();

    return (
        <div className='relative mt-16 mr-auto ml-auto flex max-w-[80%] min-w-[80%] flex-col gap-3 sm:max-w-[500px] sm:min-w-[500px] lg:mt-5'>
            <Image
                className='h-[280px] sm:h-[460px]'
                src='/images/picture.svg'
                alt={t('overview.alt_profile_image')}
                width={460}
                height={460}
            />
            <Image
                className='absolute top-[-36px] left-[-92px] h-[80px] sm:top-[-36px] sm:left-[-120px] sm:h-[134px]'
                src='/images/frontend-main-stack.svg'
                alt={t('overview.frontend_main_stack')}
                width={298}
                height={134}
            />
            <Image
                className='absolute top-[8px] right-[-98px] h-[80px] sm:top-[32px] sm:right-[-132px] sm:h-[134px]'
                src='/images/backend-main-stack.svg'
                alt={t('overview.backend_main_stack')}
                width={273}
                height={134}
            />
            <Image
                className='absolute bottom-[-24px] left-[-64px] h-[80px] sm:bottom-[-48px] sm:left-[60px] sm:h-[134px]'
                src='/images/mobile-main-stack.svg'
                alt={t('overview.mobile_main_stack')}
                width={208}
                height={134}
            />
        </div>
    );
}
