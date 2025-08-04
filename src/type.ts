export interface ModalStore {
    sidebarOpened: boolean;
    setSideBarOpened: () => void;
}

export interface Counter {
    id: string;
    amount: string;
    symbol: string;
    title: string;
}

export interface Card2Type {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export interface Card3Type {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    last?: boolean;
}

export interface Card5Type {
    id: string;
    image: string;
    title: string;
    description: string;
}

export interface Card7Type {
    id: string;
    image: string;
    title: string;
    href: string;
    date: string;
}

export interface CountryCardType {
    id: string;
    image: string;
    title: string;
}
