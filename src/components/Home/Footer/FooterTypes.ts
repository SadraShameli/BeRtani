export interface INavItem {
    title: string;
    url: string;
    icon?: JSX.Element;
}

export interface INavList {
    title: string;
    items: INavItem[];
}
