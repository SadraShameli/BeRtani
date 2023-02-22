import { IMenuItem } from './MenuTypes';

function GenerateMenuItems({ title, items }: { title: string; items: IMenuItem[] }) {
    return (
        <div className='grid gap-y-5'>
            {items.map((value, index) => {
                return (
                    <div className='' key={index}>
                        <div className=''>
                            <div className='flex justify-between'>
                                <p className='font-bold text-lg'>{value.title}</p>
                                <p className='font-bold text-lg'>
                                    {value.price.currency}
                                    {value.price.value}
                                </p>
                            </div>
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

                <div className='grid divide-y gap-y-10'>
                    {starterItems && <GenerateMenuItems title='Voorgerechten' items={starterItems} />}

                    {mainItems && <GenerateMenuItems title='Hoofdgerechten' items={mainItems} />}

                    {dessertItems && <GenerateMenuItems title='Nagerechten' items={dessertItems} />}
                </div>
            </div>
        </div>
    );
}
