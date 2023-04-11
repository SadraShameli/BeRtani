import { useSession } from 'next-auth/react';

import Section from '~/layouts/Section';
import UserSignUp from '~/components/User/UserSignUp';
import AccountDashboard from '~/components/Account/AccountDashboard';

export default function Account() {
    const { data: session } = useSession();

    return <Section>{session ? <AccountDashboard name={session.user.name} email={session.user.email} image={session.user.image} /> : <UserSignUp />}</Section>;
}
