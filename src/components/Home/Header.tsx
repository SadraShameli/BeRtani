import Link from 'next/link';
import Routes from '~/utils/route';

import Anchor from '~/components/Anchor';
import RestaurantIcon from '~/components/Icons/Restaurant';

export default function HomeHeader() {
    return (
        <nav className='absolute z-[9999] w-full pt-10 text-white'>
            <div className='container flex justify-between'>
                <Link type='button' title='Home' href='/'>
                    <RestaurantIcon className='h-7 w-7 fill-current' />
                </Link>

                <div className='space-x-10 stroke-current text-sm uppercase tracking-widest'>
                    <Anchor href={Routes.menu}>Menu</Anchor>

                    <Anchor href={Routes.booking}>Booking</Anchor>

                    <Anchor href={Routes.recipes}>Recipes</Anchor>

                    <Anchor href={Routes.account}>Account</Anchor>

                    <Anchor href={Routes.about}>About us</Anchor>
                </div>
            </div>
        </nav>
    );
}
