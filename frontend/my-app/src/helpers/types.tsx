export interface Product {
    title: string,
    isbn13: string,
    isbn: string,
    image: string,
    id: string,
    link: string,
    customer_rating: number
}

export interface SearchedProductResponse {
    products: Array<Product>

}