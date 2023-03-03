import Link from 'next/link';
import { NavList, SocialIcons } from './FooterContent';

export default function Footer({ title }: { title: string }) {
    return (
        <div className='mt-52 border-t'>
            <footer className='container grid place-items-center py-20'>
                <div className='grid place-items-center gap-y-14'>
                    <p className='font-newyork text-4xl font-bold tracking-widest'>{title}</p>

                    <div className='space-x-8 divide-x'>
                        {NavList.map((value, index) => {
                            return (
                                <Link className='pl-8 hover:text-hover' key={index} href={value.url} title={value.title}>
                                    {value.title}
                                </Link>
                            );
                        })}
                    </div>

                    <div className='flex gap-x-8'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <Link className='h-5 w-5 hover:text-hover' key={index} href={value.url} title={value.title}>
                                    {value.icon}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <p className='mt-10 text-sm'>© 2023 - 2023 {title}, Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}
