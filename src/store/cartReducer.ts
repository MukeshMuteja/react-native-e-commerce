import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductCart } from "../utility/types";


export interface CartState  {
    products: IProductCart[]
}

const initialState: CartState = {
    products: [],
}

/* The code is creating a slice of the Redux store for managing the cart state. */
export const CartReducerSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addIncrementCount: (state, action: PayloadAction<IProduct>) => {
            
          const productIndex = state.products.findIndex(item => item.product.id === action.payload.id)
          if (productIndex !== -1) {
              const cartItem = state.products[productIndex]
              cartItem.count  =  cartItem.count + 1
            state.products[productIndex] = cartItem
          } else {
            state.products.push({product: action.payload, count : 1})
          }
        },
        decrementCount: (state, action: PayloadAction<IProduct>) => {
            const productIndex = state.products.findIndex(item => item.product.id === action.payload.id)
            if (productIndex !== -1) {
                const cartItem = state.products[productIndex]
                cartItem.count  =  cartItem.count - 1
                if (cartItem.count === 0) {
                    state.products.splice(productIndex, 1)      
                } else {
                    state.products[productIndex] = cartItem
                }
            }
        }
    }

})

export const {addIncrementCount, decrementCount} = CartReducerSlice.actions
export default CartReducerSlice.reducer