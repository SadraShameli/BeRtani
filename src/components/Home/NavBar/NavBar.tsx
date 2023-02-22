import Link from 'next/link';
import Routes from '~/utils/routes';

import HomeIcon from '~/components/Icons/Home';
import HeartIcon from '~/components/Icons/Heart';
import BasketIcon from '~/components/Icons/Basket';
import SearchIcon from '~/components/Icons/Search';
import AccountIcon from '~/components/Icons/Account';
import DarkModeIcon from '~/components/Icons/DarkMode';
import LightModeIcon from '~/components/Icons/LightMode';

export default function NavigationBar() {
    return (
        <nav className='fixed inset-x-0 top-0 z-[9999] bg-[rgba(255,255,255,0.72)] py-3 saturate-[200%] backdrop-blur-[20px] dark:bg-[rgba(0,0,0,0.72)]'>
            <div className='text-sm all-children:items-center'>
                <div className='container flex stroke-current'>
                    <div className='flex divide-x'>
                        <Link type='button' title='Home' href='/'>
                            <HomeIcon className='mr-8 h-6 w-6' />
                        </Link>

                        <div className='hidden space-x-8 pl-8 sm:block'>
                            <Link className='hover:underline' href=''>
                                Menu
                            </Link>

                            <Link className='hover:underline' href=''>
                                Snack Mix & Match
                            </Link>

                            <Link className='hover:underline' href=''>
                                Drinks & Cocktails
                            </Link>
                        </div>
                    </div>

                    <div className='ml-auto flex divide-x'>
                        <div className='space-x-8'>
                            <button type='button' title='Theme selector'>
                                <DarkModeIcon className='hidden h-6 w-6 dark:block' />

                                <LightModeIcon className='h-6 w-6 dark:hidden' />
                            </button>

                            <button type='button' title='Search'>
                                <SearchIcon className='mr-8 h-6 w-6' />
                            </button>
                        </div>

                        <div className='space-x-8'>
                            <Link type='button' title='Account' href={Routes.account}>
                                <AccountIcon className='ml-8 h-5 w-5' />
                            </Link>

                            <Link type='button' title='Favorites' href={Routes.favorites}>
                                <HeartIcon className='h-5 w-5 fill-current' />
                            </Link>

                            <Link type='button' title='Shopping bag' href={Routes.checkout}>
                                <BasketIcon className='h-6 w-6' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
