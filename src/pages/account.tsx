import Head from 'next/head';
import { useSession } from 'next-auth/react';

import Section from '~/layouts/Section';
import UserSignUp from '~/components/User/UserSignUp';
import AccountDashboard from '~/components/Account/AccountDashboard';

import { SiteInto } from '~/data/Site';

export default function Account() {
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>Account</title>
                <meta name='description' content={SiteInto.title} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Section>{session ? <AccountDashboard name={session.user.name} email={session.user.email} image={session.user.image} /> : <UserSignUp />}</Section>
        </>
    );
}
