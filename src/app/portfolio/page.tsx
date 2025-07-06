import Navbar from '@/components/Navbar';
import LandingPageSysvaleCard from './components/LandingPageSysvaleCard';

export default async function PortfolioPage() {
    return (
        <div className='background-design flex min-h-screen w-screen flex-col px-10 py-8'>
            <Navbar />
            <main className='my-auto flex max-w-[1920px] flex-col items-center gap-[32px] sm:mr-auto sm:ml-auto sm:w-4/5'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='mt-4 flex w-full justify-center text-4xl font-black sm:mt-24 sm:text-6xl'>
                        <div className='text-purple-600'>My</div>
                        <div className=''>Portfolio</div>
                        <div className='text-purple-600'>.</div>
                    </div>
                    <div className='text-xl font-light text-gray-400'>
                        Selected works
                    </div>
                </div>
                <LandingPageSysvaleCard />
            </main>
        </div>
    );
}
