import { type IMenuItem } from './MenuTypes';

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

export default function MenuCard({
    starterItems,
    mainItems,
    dessertItems,
}: {
    starterItems?: IMenuItem[];
    mainItems?: IMenuItem[];
    dessertItems?: IMenuItem[];
}) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='pt-5 text-center text-6xl font-bold tracking-wide'>Menukaart</h1>

            <div className='grid gap-y-10 divide-y pt-52'>
                {starterItems && <GenerateMenuItems title='Voorgerechten' items={starterItems} />}

                {mainItems && <GenerateMenuItems title='Hoofdgerechten' items={mainItems} />}

                {dessertItems && <GenerateMenuItems title='Nagerechten' items={dessertItems} />}
            </div>
        </div>
    );
}
