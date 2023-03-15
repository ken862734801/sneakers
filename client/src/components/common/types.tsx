export type Page = "men" | "women" | "kids" | "sale";

export interface Product {
    name: string,
    price: number,
    images: string[]
    // category: string
}

export interface Review {
    name: string;
    occupation: string;
    review: string;
    image: string;
}
