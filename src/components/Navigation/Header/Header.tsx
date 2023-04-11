import Link from 'next/link';
import Routes from '~/utils/route';

import HomeIcon from '~/components/Icons/Home';
import BasketIcon from '~/components/Icons/Basket';
import SearchIcon from '~/components/Icons/Search';
import DarkModeIcon from '~/components/Icons/DarkMode';
import LightModeIcon from '~/components/Icons/LightMode';

export default function Header() {
    return (
        <nav className='fixed inset-x-0 top-0 z-[9999] bg-[rgba(255,255,255,0.72)] py-3 saturate-[200%] backdrop-blur-[20px] dark:bg-[rgba(0,0,0,0.72)]'>
            <div className='container flex items-center justify-between stroke-current text-sm'>
                <Link type='button' title='Home' href='/'>
                    <HomeIcon className='h-6 w-6 hover:text-hover' />
                </Link>

                <button type='button' title='Theme selector'>
                    <DarkModeIcon className='hidden h-6 w-6 hover:text-hover dark:block' />

                    <LightModeIcon className='h-6 w-6 hover:text-hover dark:hidden' />
                </button>

                <Link className='hidden hover:text-hover lg:block' href={Routes.menu}>
                    Menu
                </Link>

                <Link className='hidden hover:text-hover lg:block' href={Routes.booking}>
                    Booking
                </Link>

                <Link className='hidden hover:text-hover lg:block' href={Routes.recipes}>
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
        </nav>
    );
}
