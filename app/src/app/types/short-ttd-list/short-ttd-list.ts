export interface Create {
    text : string;
    click : () => void;
};

export interface Item {
    title : string;
    tags : string[]; // tmp Tag[]
    description : string;
};

export type List = Item[];
