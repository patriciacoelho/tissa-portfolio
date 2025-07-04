import Navbar from '@/components/Navbar';
import OverviewSection from '@/components/OverviewSection';

export default async function Home() {
    return (
        <div className='background-design flex min-h-screen w-screen flex-col px-10 py-8'>
            <Navbar />
            <main className='my-auto flex flex-row items-center gap-[32px] sm:items-start'>
                <OverviewSection />
                <div className='mt-5 mr-auto flex max-w-[500px] min-w-[500px] flex-col gap-3'></div>
            </main>
        </div>
    );
}
