export interface INavigationLink {
    title: string;
    url: string;
    icon?: JSX.Element;
}

export interface INavigation {
    title: string;
    items: INavigationLink[];
}
