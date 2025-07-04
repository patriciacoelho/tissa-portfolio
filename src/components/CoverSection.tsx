import Image from 'next/image';
// import { getTranslations } from 'next-intl/server';

export default async function CoverSection() {
    return (
        <div className='mt-5 mr-auto ml-auto flex max-w-[500px] min-w-[500px] flex-col gap-3'>
            <Image
                src='/images/picture.svg'
                alt='LinkedIn'
                width={460}
                height={460}
            />
        </div>
    );
}
