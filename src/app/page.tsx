import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='background-design min-h-screen w-screen px-10 py-8'>
            <header className='z-10 flex w-4/5 w-full max-w-[1920px] items-center justify-between justify-self-center'>
                <Image
                    className='cursor-pointer'
                    src='/images/tissa.svg'
                    alt='logo'
                    width={75}
                    height={32}
                />
                <div className='color-neutral flex items-center gap-8'>
                    <Link
                        aria-current='page'
                        href='/'
                        className='router-link-active router-link-exact-active active-nav-item flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500'
                    >
                        <span>Home</span>
                        <div className='border-radius-full h-[3px] w-1/3 bg-violet-500'></div>
                    </Link>
                    <a
                        href='/portfolio'
                        className='flex h-[44px] w-[100px] cursor-pointer flex-col items-center justify-center hover:text-violet-500'
                    >
                        <span>Portfolio</span>
                    </a>
                </div>
                <button
                    type='button'
                    className='me-2 mb-2 rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-br hover:shadow-lg hover:shadow-violet-200 focus:ring-4 focus:ring-violet-300 focus:outline-none dark:focus:ring-violet-800'
                >
                    Contact me
                </button>
            </header>
            <main className='flex flex-row items-center gap-[32px] sm:items-start'>
                <div className='mt-5 ml-auto flex max-w-[500px] flex-col gap-3'>
                    <div className='relative flex flex-col items-start text-6xl font-black'>
                        <div className='color-neutral z-10'>Patricia</div>
                        <div className='color-primary z-10'>Coelho</div>
                        <span className='color-neutral-light z-10 mt-2 text-xl font-light'>
                            Frontend Developer | FullStack Developer
                        </span>
                    </div>
                    <div className='mt-10 flex w-full gap-5'>
                        <div className='z-50 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 outline-0 hover:shadow-lg hover:shadow-blue-100 hover:outline-1 hover:outline-blue-400'>
                            <Image
                                src='/images/linkedin.svg'
                                alt='LinkedIn'
                                width={34}
                                height={34}
                            />
                            <span className='color-neutral-dark'>LinkedIn</span>
                        </div>
                        <div className='z-50 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 outline-0 hover:shadow-lg hover:shadow-blue-100 hover:outline-1 hover:outline-blue-400'>
                            <Image
                                src='/images/github.svg'
                                alt='GitHub'
                                width={34}
                                height={34}
                            />
                            <span className='color-neutral-dark'>GitHub</span>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mr-auto flex max-w-[500px] min-w-[500px] flex-col gap-3'></div>
            </main>
        </div>
    );
}
