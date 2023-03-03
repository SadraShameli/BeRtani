import Link from 'next/link';
import Routes from '~/utils/routes';

import Anchor from '~/components/Anchor';
import HomeIcon from '~/components/Icons/Home';
import BasketIcon from '~/components/Icons/Basket';
import SearchIcon from '~/components/Icons/Search';
import DarkModeIcon from '~/components/Icons/DarkMode';
import LightModeIcon from '~/components/Icons/LightMode';
import RestaurantIcon from '~/components/Icons/Restaurant';

export default function Header({ useShorterVersion }: { useShorterVersion?: boolean }) {
    if (useShorterVersion) {
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
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            <nav className='fixed inset-x-0 top-0 z-[9999] bg-[rgba(255,255,255,0.72)] py-3 text-sm saturate-[200%] backdrop-blur-[20px] dark:bg-[rgba(0,0,0,0.72)]'>
                <div className='container flex justify-center'>
                    <div className='flex w-full items-center justify-between stroke-current'>
                        <Link type='button' title='Home' href='/'>
                            <HomeIcon className='h-6 w-6 hover:text-hover' />
                        </Link>

                        <button type='button' title='Theme selector'>
                            <DarkModeIcon className='hidden h-6 w-6 hover:text-hover dark:block' />

                            <LightModeIcon className='h-6 w-6 hover:text-hover dark:hidden' />
                        </button>

                        <Link className='hidden hover:text-hover lg:block' href=''>
                            Menu
                        </Link>

                        <Link className='hidden hover:text-hover lg:block' href=''>
                            Booking
                        </Link>

                        <Link className='hidden hover:text-hover lg:block' href=''>
                            Recipes
                        </Link>

                        <Link className='hidden hover:text-hover lg:block' href={Routes.account}>
                            Account
                        </Link>

                        <button type='button' title='Search'>
                            <SearchIcon className='h-6 w-6 hover:text-hover' />
                        </button>

                        <Link type='button' title='Shopping bag' href={Routes.checkout}>
                            <BasketIcon className='h-6 w-6 hover:text-hover' />
                        </Link>
                    </div>
                </div>
            </nav>

            <div className='mt-28' />
        </>
    );
}
