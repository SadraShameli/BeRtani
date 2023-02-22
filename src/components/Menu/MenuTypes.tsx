export enum EItemTypes {
    Starters,
    MainDishes,
    Dessert,
}

export interface IItemPrice {
    value: number;
    currency: string;
}

export interface IIngredient {
    title: string;
    amount: string;
}

export interface IMenuItem {
    title: string;
    description: string;
    price: IItemPrice;
    type: EItemTypes;
    ingredients: IIngredient[];
    totalCalories: number;
    timeToCook: number;
    starCount: number;
    ratingCount: number;
}
