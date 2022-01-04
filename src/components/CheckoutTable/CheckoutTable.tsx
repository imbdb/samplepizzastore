import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material'
import React from 'react'
import './CheckoutTable.css'
import { useAppSelector } from '../../state/hooks'
import { Product } from '../../state/product/ProductListSlice'

interface ProductObj {
    [key: string]: Product
}

// function calculateTotal() {
//     let productObject = getProductObject()
//     let total = 0
//     Object.values(cart).forEach((cartItem) => {
//         total += productObject[cartItem.id].price * cartItem.quantity
//     })
//     return total
// }

function getProductObject(products: Product[]): ProductObj {
    let productObject: ProductObj = {}
    for (let product of products) {
        productObject[product.id] = product
    }
    return productObject
}

function CheckoutTable() {
    const cart = useAppSelector((state) => state.product.cart)
    const products = getProductObject(
        useAppSelector((state) => state.product.products)
    )

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Pizza</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Qty</TableCell>
                        <TableCell align="right">Sub-total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(cart).map((cartItem) => (
                        <TableRow
                            key={cartItem.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}>
                            <TableCell component="th" scope="row">
                                {products[cartItem.id].name}
                            </TableCell>
                            <TableCell align="right">
                                {products[cartItem.id].price}
                            </TableCell>
                            <TableCell align="right">
                                {cartItem.quantity}
                            </TableCell>
                            <TableCell align="right">
                                {products[cartItem.id].price *
                                    cartItem.quantity}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CheckoutTable
