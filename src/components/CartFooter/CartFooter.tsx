import { Box, Button, Paper } from '@mui/material'
import ProductList from '../../components/ProductList/ProductList'
import React from 'react'
import Header from '../../components/Header'
import './CartFooter.css'
import { useAppSelector } from '../../state/hooks'
import { Product } from '../../state/product/ProductListSlice'

interface ProductObj {
    [key: string]: Product
}

function CartFooter() {
    const cart = useAppSelector((state) => state.product.cart)
    const products = useAppSelector((state) => state.product.products)

    function getProductObject(): ProductObj {
        let productObject: ProductObj = {}
        for (let product of products) {
            productObject[product.id] = product
        }
        return productObject
    }

    function calculateTotal() {
        let productObject = getProductObject()
        let total = 0
        Object.values(cart).forEach((cartItem) => {
            total += productObject[cartItem.id].price * cartItem.quantity
        })
        return total
    }

    return (
        <div className="footer">
            <Box sx={{ p: 2 }}>
                <span className="footer-total">
                    Total: {calculateTotal().toFixed(2)}
                </span>
                <Button variant="contained" color="success" size="large">
                    Continue to Checkout
                </Button>
            </Box>
        </div>
    )
}

export default CartFooter
