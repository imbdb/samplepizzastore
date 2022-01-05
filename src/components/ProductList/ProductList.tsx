import { Box, Grid, IconButton, Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import React, { useEffect } from 'react'
import {
    updateProducts,
    Product,
    updateCart,
    removeFromCart,
} from '../../state/product/ProductListSlice'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { loadProductList } from '../../services/productservice'
import './ProductList.css'

function ProductList() {
    const products = useAppSelector((state) => state.product.products)
    const cart = useAppSelector((state) => state.product.cart)
    const dispatch = useAppDispatch()
    // dispatch(load())
    useEffect(() => {
        async function getProducts() {
            const products = await loadProductList()
            dispatch(updateProducts(products))
        }
        getProducts()
    }, [dispatch])

    function handleAdd(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        productId: string
    ) {
        let productUpdate = {
            id: productId,
            quantity: cart[productId] ? cart[productId].quantity + 1 : 1,
        }
        dispatch(updateCart(productUpdate))
    }

    function handleRemove(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        productId: string
    ) {
        if (cart[productId] && cart[productId].quantity > 1) {
            let productUpdate = {
                id: productId,
                quantity: cart[productId] ? cart[productId].quantity - 1 : 0,
            }
            dispatch(updateCart(productUpdate))
        } else {
            dispatch(removeFromCart(productId))
        }
    }

    return (
        <Box className="product-list">
            {products.map((product: Product) => (
                <Paper
                    sx={{ pb: 2, px: 2, mb: 2, mx: 2, borderRadius: '10px' }}
                    variant="outlined"
                    className={'product-wrapper p-' + product.id}
                    key={product.id}>
                    <Grid container>
                        <Grid item md={9}>
                            <Box sx={{ p: 2 }}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <span>${product.price}</span>
                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box
                                sx={{ p: 2 }}
                                className="product-quantity-wrapper">
                                <IconButton
                                    className="remove-button"
                                    aria-label="remove"
                                    onClick={(e) =>
                                        handleRemove(e, product.id)
                                    }>
                                    <RemoveIcon fontSize="large" />
                                </IconButton>
                                {cart[product.id] ? (
                                    <span className="p-qty">
                                        {cart[product.id].quantity}
                                    </span>
                                ) : (
                                    <span className="p-qty">0</span>
                                )}
                                <IconButton
                                    className="add-button"
                                    aria-label="add"
                                    onClick={(e) => handleAdd(e, product.id)}>
                                    <AddIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    )
}

export default ProductList
