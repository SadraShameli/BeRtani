import Anchor from '~/components/Anchor';
import { type ISiteProps } from '~/types/Site';

export default function MainPage({ title, address, number, email, description }: ISiteProps) {
    return (
        <main className='bg-black text-white'>
            <video className='h-screen w-screen object-cover opacity-20' autoPlay loop muted>
                <source src='/vid/restaurantAds.mp4' />
            </video>

            <div className='absolute bottom-12 w-full font-light'>
                <div className='container uppercase tracking-widest'>
                    <h1 className='font-newyork text-8xl'>{title}</h1>
                    <p className='text-xl tracking-[0.3em]'>{description}</p>

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
