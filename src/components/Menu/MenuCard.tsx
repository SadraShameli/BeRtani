import type { IMenuItem, IMenuItems } from './MenuTypes';

function GenerateMenuItems({ title, items }: { title: string; items: IMenuItem[] }) {
    return (
        <div className='space-y-5'>
            <h2 className='pt-5 text-center'>{title}</h2>

            {items.map((value, index) => {
                return (
                    <div className='grid grid-cols-[1fr_auto] gap-x-5' key={index}>
                        <div>
                            <p className='text-lg font-bold'>{value.title}</p>
                            <p>{value.description}</p>
                        </div>

                        <div>
                            <p className='grid text-lg font-bold'>
                                <span>
                                    {value.price.currency}
                                    {value.price.value}
                                </span>

                                <span>{value.times.preparing} min.</span>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function MenuCard({ items }: { items: IMenuItems }) {
    return (
        <>
            <h1 className='pt-5 text-center text-6xl font-bold tracking-wide'>Menukaart</h1>

            <div className='grid gap-y-10 divide-y pt-52'>
                {items.starters && <GenerateMenuItems title='Voorgerechten' items={items.starters} />}

                {items.mainDishes && <GenerateMenuItems title='Hoofdgerechten' items={items.mainDishes} />}

                {items.dessert && <GenerateMenuItems title='Nagerechten' items={items.dessert} />}
            </div>
        </>
    );
}
