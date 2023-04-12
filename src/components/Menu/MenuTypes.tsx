export interface IItemPrice {
    value: number;
    currency: string;
}

export interface IIngredient {
    title: string;
    amount: string;
}

export interface IItemTime {
    preparing: number;
    cooking?: number;
    waiting?: number;
}

export interface IMenuItem {
    title: string;
    description: string;
    price: IItemPrice;
    ingredients: IIngredient[];
    totalKCalories: number;
    times: IItemTime;
    starCount: number;
    ratingCount: number;
}

export interface IMenuItems {
    starters?: IMenuItem[];
    mainDishes?: IMenuItem[];
    dessert?: IMenuItem[];
    drinks?: IMenuItem[];
}
