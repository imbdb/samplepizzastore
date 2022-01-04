import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PricingRule } from '../../services/checkoutservice'

export interface Product {
    id: string
    type: string
    name: string
    description: string
    price: number
}

export interface cartItem {
    id: string
    quantity: number
}

export interface Cart {
    [key: string]: cartItem
}

export interface ProductSlice {
    products: Product[]
    cart: Cart
    pricingRules: PricingRule[]
}

// Define the initial state using that type
const initialState: ProductSlice = {
    products: [],
    cart: {},
    pricingRules: [],
}

export const ProductListSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
        updateCart: (state, action: PayloadAction<cartItem>) => {
            state.cart[action.payload.id] = action.payload
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            delete state.cart[action.payload]
        },
        updatePricingRules: (state, action: PayloadAction<PricingRule[]>) => {
            state.pricingRules = action.payload
        },
    },
})

export const {
    updateProducts,
    updateCart,
    removeFromCart,
    updatePricingRules,
} = ProductListSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectList = (state: RootState) => state.product.productList

export default ProductListSlice.reducer
