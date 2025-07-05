import Image from 'next/image';
// import { getTranslations } from 'next-intl/server';

export default async function CoverSection() {
    return (
        <div className='relative mt-5 mr-auto ml-auto flex max-w-[500px] min-w-[500px] flex-col gap-3'>
            <Image
                src='/images/picture.svg'
                alt='Profile picture'
                width={460}
                height={460}
            />
            <Image
                className='absolute top-[-36px] left-[-120px]'
                src='/images/frontend-main-stack.svg'
                alt='Frontend main stack'
                width={298}
                height={134}
            />
            <Image
                className='absolute top-[32px] right-[-132px]'
                src='/images/backend-main-stack.svg'
                alt='Backend main stack'
                width={273}
                height={134}
            />
            <Image
                className='absolute bottom-[-48px] left-[60px]'
                src='/images/mobile-main-stack.svg'
                alt='Mobile main stack'
                width={208}
                height={134}
            />
        </div>
    );
}
