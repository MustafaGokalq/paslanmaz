// CATEGORY TYPE
export interface ICategory {
    _id?: string,
    name: string,
    image: string,
}

export interface ICategoryResponse {
    success: boolean,
    categories: ICategory[]
}



// PRODUCT TYPE
export interface IProduct {
    _id?: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    isClick: number
}

export interface IProductResponse {
    success: boolean,
    products: IProduct[]
}