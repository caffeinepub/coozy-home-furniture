import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Testimonial {
    id: string;
    customerName: string;
    review: string;
    rating: bigint;
}
export interface Product {
    id: string;
    featured: boolean;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    price: number;
}
export enum Category {
    bedroom = "bedroom",
    office = "office",
    livingRoom = "livingRoom",
    dining = "dining"
}
export interface backendInterface {
    addProduct(product: Product): Promise<void>;
    addTestimonial(testimonial: Testimonial): Promise<void>;
    addToFavorites(productId: string): Promise<void>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getFavoriteProducts(): Promise<Array<Product>>;
    getFeaturedProducts(): Promise<Array<Product>>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    removeFromFavorites(productId: string): Promise<void>;
    subscribeToNewsletter(email: string): Promise<void>;
}
