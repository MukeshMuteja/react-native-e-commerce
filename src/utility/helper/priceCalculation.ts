import { IProductCart } from "../types";

/**
 * The function calculates the total amount of a shopping cart by multiplying the count of each product
 * with its price and summing them up.
 * @param {IProductCart[]} cart - An array of objects representing the items in the cart. Each object
 * has two properties:
 * @returns the total cart amount as a string with two decimal places.
 */
export const calculateCartAmount = (cart: IProductCart[]) => {
    const total = cart.reduce((acc, { count, product }) => {
        return acc + (count * product.price)
    }, 0)
    return total
}