export type Page = "men" | "women" | "kids" | "sale";

export interface ProductDetailProps {
    sku: string,
    name: string,
    price: number,
    images: string[],
    description: string,
    style: string
    category: string,
    onSale: boolean
}
export interface AppState {
    cart: any[];
  }

export interface ProductCardProps {
    sku: string,
    name: string,
    price: number,
    images: string[],
    style : string,
    onSale: boolean,
}

export interface WidgetProps{
    sku: string,
    name: string,
    price: number,
    images: string[],
    style : string
}

export interface Review {
    name: string;
    occupation: string;
    review: string;
    image: string;
}
