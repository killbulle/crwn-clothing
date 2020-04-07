import { Item } from './Item';

export interface ShopData {
    id: number;
    title: string;
    routeName: string;
    items: Item[]
}
