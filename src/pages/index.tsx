import Head from 'next/head';

import MainPage from '~/components/Home/MainPage';
import { SiteInto } from '~/data/Site';

export default function Home() {
    return (
        <>
            <Head>
                <title>{SiteInto.title}</title>
                <meta name='description' content={SiteInto.title} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <MainPage {...SiteInto} />
        </>
    );
}
