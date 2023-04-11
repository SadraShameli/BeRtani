import Head from 'next/head';

import Section from '~/layouts/Section';
import MenuCard from '~/components/Menu/MenuCard';

import { SiteInto } from '~/data/Site';
import { MenuItems } from '~/data/MenuContent';

export default function Menu() {
    return (
        <>
            <Head>
                <title>Menu</title>
                <meta name='description' content={SiteInto.title} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Section>
                <div className='container'>
                    <MenuCard items={MenuItems} />
                </div>
            </Section>
        </>
    );
}
