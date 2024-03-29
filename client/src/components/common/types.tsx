export type Page = "men" | "women" | "kids" | "sale";

export interface ShoppingCartContextType{
    cart: any[];
    setCart: (cart: any[]) => void;
}
export interface UserInformation {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    favorites: string[];
}
  
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
export interface ShoppingCartState {
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

export interface HomeProps {
    isLoggedIn: boolean;
}

export interface WidgetProps{
    sku: string,
    name: string,
    price: number,
    images: string[],
    style : string
    isLoggedIn: boolean;
}

export interface Review {
    name: string;
    occupation: string;
    review: string;
    image: string;
}

export interface CartItemType {
    name: string;
    sku: string;
    price: number;
    style: string;
    sizes: any[],
    size: string;
    image: string;
    quantity: number;
}
