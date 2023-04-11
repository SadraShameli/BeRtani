import Head from 'next/head';

import Section from '~/layouts/Section';
import UserSignIn from '~/components/User/UserSignIn';

import { SiteInto } from '~/data/Site';

export default function SignIn() {
    return (
        <>
            <Head>
                <title>Sign in</title>
                <meta name='description' content={SiteInto.title} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Section>
                <UserSignIn />
            </Section>
        </>
    );
}
