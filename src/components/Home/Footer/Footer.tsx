import Link from 'next/link';
import { NavigationList, PaymentIcons, SocialIcons } from './FooterContent';

export default function Footer({ title }: { title: string }) {
    return (
        <div className='mt-32 border-t'>
            <footer className='container'>
                <div className='space-y-20 py-20'>
                    <div className='grid w-full place-items-center'>
                        <h1>{title}</h1>

                        <div className='flex space-x-5'>
                            {PaymentIcons.map((value, index) => {
                                return (
                                    <div key={index} className='h-10 w-10' title={value.title}>
                                        {value.icon}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='grid w-full grid-cols-2 gap-5 sm:grid-cols-4'>
                        {NavigationList.map((value, index) => {
                            return (
                                <div key={index}>
                                    <p className='font-bold'>{value.title}</p>

                                    <ul className='mt-3 space-y-2 text-sm'>
                                        {value.items.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={value.url} title={value.title}>
                                                        {value.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-between gap-8 border-t py-10'>
                    Copyright © 2023 {title}. All rights reserved.
                    <div className='flex gap-10'>
                        {SocialIcons.map((value, index) => {
                            return (
                                <Link className='h-6 w-6' key={index} href={value.url} title={value.title}>
                                    {value.icon}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </div>
    );
}
