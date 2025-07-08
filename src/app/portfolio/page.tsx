import Navbar from '@/components/Navbar';
import LandingPageSysvaleCard from './components/LandingPageSysvaleCard';
import CuidaDesignSystemCard from './components/CuidaDesignSystemCard';
import CidadeSaudavelCard from './components/CidadeSaudavelCard ';
import MinhaVezCard from './components/MinhaVezCard';
import GuataCard from './components/GuataCard';
import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
    const t = useTranslations();

    return (
        <div className='background-design flex min-h-screen w-screen flex-col px-10 py-8'>
            <Navbar />
            <main className='my-auto flex max-w-[1920px] flex-col items-center gap-[32px] sm:mr-auto sm:ml-auto sm:w-4/5'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='mt-4 flex w-full justify-center text-4xl font-black sm:mt-24 sm:text-6xl'>
                        <div className='text-purple-600'>
                            {t('portfolio.pronoun')}
                        </div>
                        <div className=''>{t('portfolio.title')}</div>
                        <div className='text-purple-600'>.</div>
                    </div>
                    <div className='text-xl font-light text-gray-400'>
                        {t('portfolio.selected_works')}
                    </div>
                </div>
                <CuidaDesignSystemCard />
                <CidadeSaudavelCard />
                <MinhaVezCard />
                <GuataCard />
                <LandingPageSysvaleCard />
            </main>
        </div>
    );
}
