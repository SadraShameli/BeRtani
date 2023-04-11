import { type IMenuItems } from '~/components/Menu/MenuTypes';

export const MenuItems: IMenuItems = {
    starters: [
        {
            title: 'Klassieke carpaccio',
            description:
                'In Italië wordt carpaccio geserveerd met olijfolie en citroen. De Nederlandse klassieker eten we het liefst zo: met pijnboompitjes, kaas en rucola.',
            price: {
                value: 11.82,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'balsamicoazijn',
                    amount: '½ el',
                },
                {
                    title: 'olijfolie truffelaroma',
                    amount: '3 el',
                },
                {
                    title: 'rundercarpaccio',
                    amount: '250 g',
                },
                {
                    title: 'rucola',
                    amount: '30 g',
                },
                {
                    title: 'parmigiano Reggiano',
                    amount: '50 g',
                },
            ],
            totalKCalories: 210,
            times: {
                preparing: 10,
            },
            starCount: 3.5,
            ratingCount: 384,
        },
        {
            title: 'Bellini (met perzik uit blik)',
            description:
                'Bellini maken: geen verse perzik, geen probleem! Met perziken op siroop en een vleugje kersenlikeur kun je alsnog een lekkere bellini maken.',
            price: {
                value: 10.14,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'halve perziken op siroop',
                    amount: '4',
                },
                {
                    title: 'prosecco',
                    amount: '400 ml',
                },
            ],
            totalKCalories: 90,
            times: {
                preparing: 10,
            },
            starCount: 3.5,
            ratingCount: 4,
        },
        {
            title: 'Caprese tartaartje',
            description: 'Insalata caprese in een fancy nieuw jasje: als een tartaartje met laagjes.',
            price: {
                value: 11.28,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'tastytom-trostomaten',
                    amount: '380 g',
                },
                {
                    title: 'vleestomaten',
                    amount: '500 g',
                },
                {
                    title: 'zout',
                    amount: '½ tl',
                },
                {
                    title: 'gerookte buffelmozzarella',
                    amount: '200 g',
                },
                {
                    title: 'verse basilicum',
                    amount: '7.5 g',
                },
                {
                    title: 'extra vierge olijfolie',
                    amount: '3 el',
                },
            ],
            totalKCalories: 260,
            times: {
                preparing: 30,
            },
            starCount: 4.5,
            ratingCount: 10,
        },
    ],
    mainDishes: [
        {
            title: 'Nduja pizza',
            description:
                'Als er iets een smaakbom is, dan is het Nduja wel. Deze pittige smeerbare worst komt uit Calabrië en is de perfecte topping voor op pizza.',
            price: {
                value: 21.82,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'lauwwarm water',
                    amount: '130 ml',
                },
                {
                    title: 'zout',
                    amount: '1 tl',
                },
                {
                    title: 'tipo 00 bloem voor pizzadeeg',
                    amount: '250 g',
                },
                {
                    title: 'gedroogde gist',
                    amount: '3.5 g',
                },
                {
                    title: 'milde olijfolie',
                    amount: '1½ el',
                },
                {
                    title: 'polpa',
                    amount: '425 ml',
                },
                {
                    title: 'knoflook',
                    amount: '1 teen',
                },
                {
                    title: 'verse basilicum',
                    amount: '15 g',
                },
                {
                    title: 'aubergine',
                    amount: '1',
                },
                {
                    title: 'mozzarella',
                    amount: '2 bollen',
                },
                {
                    title: 'nduja',
                    amount: '2 el',
                },
            ],
            totalKCalories: 1010,
            times: {
                preparing: 25,
                cooking: 14,
                waiting: 180,
            },
            starCount: 5,
            ratingCount: 2,
        },
        {
            title: 'Grillburger met truffelmayo, rucola en parmezaan',
            description: 'De klassieke grillburger in een luxe, Italiaans jasje.',
            price: {
                value: 11.26,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'truffel-paddenstoelentapenade',
                    amount: '10 g',
                },
                {
                    title: 'mayo royale (mayonaise)',
                    amount: '¾ el',
                },
                {
                    title: 'cantharellen',
                    amount: '50 g',
                },
                {
                    title: 'arachideolie',
                    amount: '½ el',
                },
                {
                    title: 'verse ciabatta',
                    amount: '1',
                },
                {
                    title: 'rucola',
                    amount: '10 g',
                },
                {
                    title: 'magere grillburgers',
                    amount: '2',
                },
                {
                    title: 'geschaafde Parmezaanse kaas',
                    amount: '12.5 g',
                },
                {
                    title: 'vleestomaat',
                    amount: '½',
                },
            ],
            totalKCalories: 640,
            times: {
                preparing: 25,
            },
            starCount: 3.5,
            ratingCount: 185,
        },
        {
            title: 'Risotto met champignons, biefstuk en parmezaan',
            description:
                'Zoek je een gerecht waarbij het lijkt alsof je uren in de keuken hebt gestaan, maar je eigenlijk al in een kwartier klaar bent? Dan zit je bij deze risotto met biefstuk helemaal goed!',
            price: {
                value: 17.29,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'Riso Scotti buona idea risotto porcino',
                    amount: '210 g',
                },
                {
                    title: 'ongezouten roomboter',
                    amount: '30 g',
                },
                {
                    title: 'zonnebloemolie',
                    amount: '½ el',
                },
                {
                    title: 'biefstuk',
                    amount: '1',
                },
                {
                    title: 'gedroogde oregano',
                    amount: '1 tl',
                },
                {
                    title: 'koelverse Italiaanse roerbakgroente kastanjechampignons',
                    amount: '325 g',
                },
                {
                    title: 'verse selderij',
                    amount: '5 g',
                },
                {
                    title: 'Parmigiano Reggiano-poeder',
                    amount: '45 g',
                },
            ],
            totalKCalories: 735,
            times: {
                preparing: 15,
            },
            starCount: 4.5,
            ratingCount: 117,
        },
    ],
    dessert: [
        {
            title: 'Semifreddo met cantuccini',
            description: 'Een nagerecht met maar 6 ingrediënten en in een kwartiertje al klaar voor de vriezer.',
            price: {
                value: 6.66,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'cantuccini',
                    amount: '87.5 g',
                },
                {
                    title: 'limoen',
                    amount: '½',
                },
                {
                    title: 'gecondenseerde melk in blik',
                    amount: '198.5 g',
                },
                {
                    title: 'verse slagroom',
                    amount: '250 ml',
                },
                {
                    title: 'gevriesdroogde fruit mix',
                    amount: '10 g',
                },
                {
                    title: 'verse frambozen',
                    amount: '112.5 g',
                },
            ],
            totalKCalories: 330,
            times: {
                preparing: 15,
                waiting: 300,
            },
            starCount: 4.5,
            ratingCount: 15,
        },
        {
            title: 'Bellini (met perzik uit blik)',
            description:
                'Bellini maken: geen verse perzik, geen probleem! Met perziken op siroop en een vleugje kersenlikeur kun je alsnog een lekkere bellini maken.',
            price: {
                value: 10.14,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'halve perziken op siroop',
                    amount: '4',
                },
                {
                    title: 'prosecco',
                    amount: '400 ml',
                },
            ],
            totalKCalories: 90,
            times: {
                preparing: 10,
            },
            starCount: 3.5,
            ratingCount: 4,
        },
        {
            title: 'Espresso martini-tiramisu',
            description: 'Het beste van 2 werelden: de onweerstaanbare combinatie van tiramisu met espresso martini.',
            price: {
                value: 23.51,
                currency: '€',
            },
            ingredients: [
                {
                    title: 'middelgrote eieren',
                    amount: '4',
                },
                {
                    title: 'fijne kristalsuiker',
                    amount: '125 g',
                },
                {
                    title: 'Nielsen Massey Madagascar bourbon vanille-extract',
                    amount: '2 tl',
                },
                {
                    title: 'mascarpone',
                    amount: '500 g',
                },
                {
                    title: 'espresso',
                    amount: '180 ml',
                },
                {
                    title: 'wodka',
                    amount: '4 el',
                },
                {
                    title: 'Kahlua koffielikeur',
                    amount: '4 el',
                },
                {
                    title: 'lange vingers',
                    amount: '250 g',
                },
                {
                    title: 'cacaopoeder',
                    amount: '2 tl',
                },
                {
                    title: 'mokkaboontjes',
                    amount: '2 el',
                },
            ],
            totalKCalories: 540,
            times: {
                preparing: 25,
                waiting: 360,
            },
            starCount: 4.5,
            ratingCount: 27,
        },
    ],
};
