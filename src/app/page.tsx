import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
    <div className="w-screen min-h-screen px-10 py-8 background-design">
        <header className="flex w-4/5 justify-between justify-self-center max-w-[1920px] items-center w-full z-10">
            <Image className="cursor-pointer" src="/images/tissa.svg" alt="logo" width={75} height={32} />
            <div className="flex items-center gap-8 color-neutral">
                <Link aria-current="page" href="/" className="router-link-active router-link-exact-active cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center active-nav-item">
                    <span>Home</span>
                    <div className="w-1/3 h-[3px] bg-violet-500 border-radius-full"></div>
                </Link>
                <a href="/portfolio" className="cursor-pointer hover:text-violet-500 h-[44px] w-[100px] flex flex-col justify-center items-center">
                    <span>Portfolio</span>
                </a>
            </div>
            <button type="button" className="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:shadow-lg hover:shadow-violet-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 font-medium rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 ">
                Contact me
            </button>
        </header>
        <main className="flex flex-row gap-[32px] items-center sm:items-start">
            <div className="flex flex-col gap-3 max-w-[500px] mt-5 ml-auto">
                <div className="text-6xl font-black flex flex-col items-start relative">
                    <div className="color-neutral z-10">Patricia</div>
                    <div className="color-primary z-10">Coelho</div>
                    <span className="color-neutral-light z-10 mt-2 text-xl font-light">Frontend Developer | FullStack Developer</span>
                </div>
                <div className="flex w-full gap-5 mt-10">
                    <div className="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl">
                        <Image src="/images/linkedin.svg" alt="LinkedIn" width={34} height={34} />
                        <span className="color-neutral-dark">LinkedIn</span>
                    </div>
                    <div className="bg-white hover:shadow-lg hover:shadow-blue-100 z-50 w-full cursor-pointer outline-0 hover:outline-1 hover:outline-blue-400 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl">
                        <Image src="/images/github.svg" alt="GitHub" width={34} height={34} />
                        <span className="color-neutral-dark">GitHub</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[500px] max-w-[500px] mt-5 mr-auto">
            </div>
        </main>
    </div>
    );
}
