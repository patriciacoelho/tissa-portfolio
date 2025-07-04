import Image from 'next/image';
// import { getTranslations } from 'next-intl/server';

export default async function OverviewSection() {
    return (
        <div className='mt-5 ml-auto flex max-w-[500px] flex-col gap-3'>
            <div className='relative flex flex-col items-start text-6xl font-black'>
                <div className='color-neutral z-10'>Patricia</div>
                <div className='color-primary z-10'>Coelho</div>
                <span className='color-neutral-light z-10 mt-2 text-xl font-light'>
                    Frontend Developer | FullStack Developer
                </span>
            </div>
            <div className='color-neutral mt-8 w-full text-xl font-light'>
                Blending code, design, and feedback to craft impactful digital
                experiences. With over 7 years of experience building scalable
                solutions with clean code, accessibility, and performance in
                mind. I turn user insights and product metrics into refined,
                engaging interfaces.
            </div>
            <div className='mt-10 flex w-full gap-5'>
                <a
                    className='z-50 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 outline-0 hover:shadow-lg hover:shadow-blue-100 hover:outline-1 hover:outline-blue-400'
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
                    <span className='color-neutral-dark'>LinkedIn</span>
                </a>
                <a
                    className='z-50 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 outline-0 hover:shadow-lg hover:shadow-blue-100 hover:outline-1 hover:outline-blue-400'
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
                    <span className='color-neutral-dark'>GitHub</span>
                </a>
            </div>
        </div>
    );
}
