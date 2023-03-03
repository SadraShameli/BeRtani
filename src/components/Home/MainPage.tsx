// import Image from 'next/image';
import Anchor from '~/components/Anchor';

interface IMainPageProps {
    title: string;
    address: string;
    number: string;
    email: string;
}

export default function MainPage({ title, address, number, email }: IMainPageProps) {
    return (
        <main className='bg-black text-white'>
            <video className='h-screen w-screen object-cover opacity-20' autoPlay loop muted>
                <source src='/vid/restaurantAds.mp4' />
            </video>

            {/* <Image className='opacity-20 mix-blend-color-dodge' src={'/img/heroTexture.jpg'} quality={100} alt='Hero background' fill /> */}

            <div className='absolute bottom-12 w-full font-light'>
                <div className='container uppercase tracking-widest'>
                    <h1 className='font-newyork text-8xl'>{title}</h1>
                    <p className='text-xl tracking-[0.3em]'>Quality first</p>

                    <div className='mt-60 flex flex-wrap gap-x-24'>
                        <p>{address}</p>

                        <p>{number}</p>

                        <Anchor>{email}</Anchor>
                    </div>
                </div>
            </div>
        </main>
    );
}
