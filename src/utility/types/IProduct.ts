
export interface IProduct {
    id: number
    colour: string
    name: string
    price: number
    img: string
}

export interface IProductCart {
    product: IProduct
    count: number
} 

