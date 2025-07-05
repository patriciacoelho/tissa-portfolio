import Image from 'next/image';
// import { getTranslations } from 'next-intl/server';

export default async function CoverSection() {
    return (
        <div className='relative mt-16 mr-auto ml-auto flex max-w-[80%] min-w-[80%] flex-col gap-3 sm:max-w-[500px] sm:min-w-[500px] lg:mt-5'>
            <Image
                className='h-[280px] sm:h-[460px]'
                src='/images/picture.svg'
                alt='Profile picture'
                width={460}
                height={460}
            />
            <Image
                className='absolute top-[-36px] left-[-92px] h-[80px] sm:top-[-36px] sm:left-[-120px] sm:h-[134px]'
                src='/images/frontend-main-stack.svg'
                alt='Frontend main stack'
                width={298}
                height={134}
            />
            <Image
                className='absolute top-[8px] right-[-98px] h-[80px] sm:top-[32px] sm:right-[-132px] sm:h-[134px]'
                src='/images/backend-main-stack.svg'
                alt='Backend main stack'
                width={273}
                height={134}
            />
            <Image
                className='absolute bottom-[-24px] left-[-64px] h-[80px] sm:bottom-[-48px] sm:left-[60px] sm:h-[134px]'
                src='/images/mobile-main-stack.svg'
                alt='Mobile main stack'
                width={208}
                height={134}
            />
        </div>
    );
}
