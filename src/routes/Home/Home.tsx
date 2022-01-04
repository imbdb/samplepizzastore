import { Box } from '@mui/material'
import ProductList from '../../components/ProductList/ProductList'
import React from 'react'
import Header from '../../components/Header'
import './Home.css'
import CartFooter from '../../components/CartFooter/CartFooter'
import { useAppSelector } from '../../state/hooks'

function Home() {
    const cart = useAppSelector((state) => state.product.cart)
    return (
        <div className="">
            <Header />
            <Box sx={{ p: 2 }}>
                <h1>Pizzas</h1>
                <ProductList />
            </Box>
            {Object.keys(cart).length > 0 ? <CartFooter /> : null}
        </div>
    )
}

export default Home
