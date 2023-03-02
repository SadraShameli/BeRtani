import Link from 'next/link';
import Routes from '~/utils/routes';

import HomeIcon from '~/components/Icons/Home';
import BasketIcon from '~/components/Icons/Basket';
import SearchIcon from '~/components/Icons/Search';
import DarkModeIcon from '~/components/Icons/DarkMode';
import LightModeIcon from '~/components/Icons/LightMode';

export default function NavigationBar() {
    return (
        <nav className='fixed inset-x-0 top-0 z-[9999] bg-[rgba(255,255,255,0.72)] py-3 text-sm saturate-[200%] backdrop-blur-[20px] dark:bg-[rgba(0,0,0,0.72)]'>
            <div className='container flex justify-center'>
                <div className='flex w-full items-center justify-between stroke-current'>
                    <Link type='button' title='Home' href='/'>
                        <HomeIcon className='h-6 w-6' />
                    </Link>

                    <button type='button' title='Theme selector'>
                        <DarkModeIcon className='hidden h-6 w-6 dark:block' />

                        <LightModeIcon className='h-6 w-6 dark:hidden' />
                    </button>

                    <Link className='hidden hover:underline lg:block' href=''>
                        Menu
                    </Link>

                    <Link className='hidden hover:underline lg:block' href=''>
                        Snack Mix & Match
                    </Link>

                    <Link className='hidden hover:underline lg:block' href=''>
                        Drinks & Cocktails
                    </Link>

                    <Link className='hidden hover:underline lg:block' href={Routes.account}>
                        Account
                    </Link>

                    <button type='button' title='Search'>
                        <SearchIcon className='h-6 w-6' />
                    </button>

                    <Link type='button' title='Shopping bag' href={Routes.checkout}>
                        <BasketIcon className='h-6 w-6' />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
