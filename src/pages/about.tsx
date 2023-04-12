import Head from 'next/head';
import Image from 'next/image';
import Section from '~/layouts/Section';

import { SiteInto } from '~/data/Site';

export default function About() {
    return (
        <>
            <Head>
                <title>About us</title>
                <meta name='description' content={SiteInto.meta} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Section>
                <div className='container grid grid-cols-2'>
                    <div>
                        <h1>About us</h1>
                        <p className='whitespace-pre-line text-justify'>{SiteInto.about}</p>
                    </div>

                    <div className='flex flex-col items-end'>
                        <div className='grid place-items-center'>
                            <Image width={500} height={500} src={'/img/Logo.png'} quality={100} alt='Logo' />
                            <p className='pt-4'>{SiteInto.logoDescription}</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
