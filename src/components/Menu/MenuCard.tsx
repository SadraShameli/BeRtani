import { type IMenuItem } from './MenuTypes';

function GenerateMenuItems({ title, items }: { title: string; items: IMenuItem[] }) {
    return (
        <div className='space-y-5'>
            <h2 className='pt-5 text-center'>{title}</h2>

            {items.map((value, index) => {
                return (
                    <div key={index}>
                        <div className='flex justify-between text-lg font-bold'>
                            <span>{value.title}</span>

                            <span>
                                {value.price.currency}
                                {value.price.value}
                            </span>
                        </div>

                        <p>{value.description}</p>
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
            <div className='max-w-4xl'>
                <h1 className='text-center'>Menukaart</h1>

                <div className='grid gap-y-10 divide-y'>
                    {starterItems && <GenerateMenuItems title='Voorgerechten' items={starterItems} />}

                    {mainItems && <GenerateMenuItems title='Hoofdgerechten' items={mainItems} />}

                    {dessertItems && <GenerateMenuItems title='Nagerechten' items={dessertItems} />}
                </div>
            </div>
        </div>
    );
}
