import { type ISiteProps } from '~/types/Site';

export const SiteInto: ISiteProps = {
    title: 'Be Rtani',
    address: '203 Venice Blvd. CA 90291. USA',
    number: '+1 310-823-5396',
    email: 'eat@bertani.com',
    description: 'Quality first',
    logoDescription: '© Be Rtani - Sinds 2023',
    copyright: '© 2023 - 2023 Be Rtani, Inc. All rights reserved.',
    meta: 'Be Rtani',
    about: `Welkom bij ons Italiaanse restaurant, waar we u graag verwelkomen in een warme en gastvrije sfeer. Bij ons draait alles om de authentieke Italiaanse keuken, gemaakt met de beste ingrediënten en volgens traditionele recepten.

Onze chefs hebben een passie voor het creëren van smaakvolle gerechten die recht doen aan de Italiaanse culinaire cultuur. Ons menu biedt een verscheidenheid aan gerechten, van verse pasta's tot heerlijke vlees- en visgerechten. We gebruiken alleen de meest verse ingrediënten om de smaken van Italië tot leven te brengen op uw bord.

Naast ons menu bieden we ook een uitgebreide wijnkaart met de beste Italiaanse wijnen die perfect passen bij onze gerechten. Onze attente en professionele bediening zorgt ervoor dat uw dinerervaring compleet is.

We zijn gevestigd in een mooie omgeving en bieden een gezellige ambiance waar u kunt genieten van een heerlijke maaltijd met vrienden, familie of collega's. Ons restaurant is geschikt voor zowel kleine als grote groepen en we hebben ook een privéruimte beschikbaar voor speciale gelegenheden.

Of u nu op zoek bent naar een romantisch diner voor twee, een gezellige avond uit met vrienden of een zakelijke bijeenkomst, ons Italiaanse restaurant biedt voor elk wat wils.

We kijken ernaar uit u te verwelkomen in ons restaurant en u te laten genieten van de smaken van Italië. Reserveringen kunnen worden gemaakt via onze website, per e-mail of telefonisch.`,
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
