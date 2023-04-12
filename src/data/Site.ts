import { type ISiteProps } from '~/types/Site';

export const SiteInto: ISiteProps = {
    title: 'Little Italy',
    address: '203 Venice Blvd. CA 90291. USA',
    number: '+1 310-823-5396',
    email: 'eat@littleitaly.com',
    description: 'Quality first',
    logoDescription: '© Little Italy - Sinds 2023',
    copyright: '© 2023 - 2023 Little Italy, Inc. All rights reserved.',
    meta: 'Little Italy',
    about: `Bent u op zoek naar de meest authentieke Italiaanse culinaire ervaring? Zoek dan niet verder! Ons Italiaanse restaurant is dé plek waar u moet zijn. Wij bieden onze gasten niet alleen de beste kwaliteit ingrediënten en traditionele Italiaanse gerechten, maar ook een unieke en onvergetelijke ervaring die u elders niet zult vinden.

Onze chef-kok is opgeleid in Italië en is gepassioneerd over de Italiaanse keuken. Hij gebruikt alleen de beste ingrediënten van lokale en internationale producenten en bereidt elk gerecht met zorg en precisie. Ons menu biedt een scala aan gerechten die de traditionele Italiaanse smaken combineren met moderne twists en innovatieve combinaties.

Naast onze uitstekende keuken bieden we ook een warme en gastvrije sfeer. Ons restaurant is ontworpen met de Italiaanse cultuur en stijl in gedachten, waardoor u zich direct thuis zult voelen. Onze medewerkers zijn vriendelijk en professioneel en zullen er alles aan doen om uw verblijf bij ons zo aangenaam mogelijk te maken.

Bij ons Italiaanse restaurant kunt u terecht voor verschillende gelegenheden: een romantisch diner voor twee, een gezellig diner met vrienden en familie, of een zakelijke bijeenkomst. Ons restaurant biedt de perfecte ambiance voor elke gelegenheid.

Kom langs bij ons Italiaanse restaurant en ontdek waarom we de beste keuze zijn voor uw volgende culinaire ervaring.`,
};

export const Routes = {
    about: '/about/',
    privacyPolicy: '/legal/privacy-policy/',
    termsAndConditions: '/legal/terms-and-conditions/',
    signIn: '/auth/signin/',
    resetPassword: '/auth/reset-password/',
    verifyRequest: '/auth/verify-request/',
    account: '/account/',
    checkout: '/checkout/',
    favorites: '/favorites/',
    menu: '/menu/',
    booking: '/booking/',
    recipes: '/recipes/',
} as const;
