import { useSession } from 'next-auth/react';

import Footer from '~/components/Home/Footer/Footer';
import UserSignUp from '~/components/User/UserSignUp';
import Header from '~/components/Home/Header/Header';
import AccountDashboard from '~/components/Account/AccountDashboard';

export default function Account() {
    const { data: session } = useSession();

    if (!session) {
        return <UserSignUp />;
    }

    return (
        <>
            <Header />

            <main className='container'>
                <AccountDashboard name={session.user.name} email={session.user.email} image={session.user.image} />
            </main>

            <Footer title='Little Italy' />
        </>
    );
}
