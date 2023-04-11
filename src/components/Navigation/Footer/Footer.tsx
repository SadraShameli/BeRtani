import Link from 'next/link';
import { NavList, SocialIcons } from './FooterContent';

export default function Footer({ title, text }: { title: string; text: string }) {
    return (
        <footer className='mt-52 border-t'>
            <div className='container py-20'>
                <div className='grid place-items-center gap-y-14 '>
                    <p className='font-newyork text-4xl font-bold tracking-widest'>{title}</p>

                    <div className='space-x-8'>
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

                <p className='mt-10 text-center text-sm'>{text}</p>
            </div>
        </footer>
    );
}
