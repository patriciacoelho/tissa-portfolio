import { useTranslations } from 'next-intl';

export default function ContactAction(props: { className: string }) {
    const t = useTranslations();

    return (
        <a
            href='mailto:patriciacoelho.slv@gmail.com'
            className={`${props.className} me-2 rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-br hover:shadow-lg hover:shadow-violet-200 focus:ring-4 focus:ring-violet-300 focus:outline-none dark:hover:shadow-purple-900 dark:focus:ring-violet-800`}
        >
            {t('common.contact_me')}
        </a>
    );
}
