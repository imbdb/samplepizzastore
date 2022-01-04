import { Box, Button } from '@mui/material'
import React from 'react'
import './CartFooter.css'
import { useAppSelector } from '../../state/hooks'
import { Product } from '../../state/product/ProductListSlice'
import { useNavigate } from 'react-router-dom'

interface ProductObj {
    [key: string]: Product
}

function CartFooter() {
    const cart = useAppSelector((state) => state.product.cart)
    const products = useAppSelector((state) => state.product.products)
    let navigate = useNavigate()
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

    function gotoCheckout(e: React.MouseEvent) {
        navigate('/checkout')
    }

    return (
        <div className="footer">
            <Box sx={{ p: 2 }}>
                <span className="footer-total">
                    Total: {calculateTotal().toFixed(2)}
                </span>
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={gotoCheckout}>
                    Continue to Checkout
                </Button>
            </Box>
        </div>
    )
}

export default CartFooter
