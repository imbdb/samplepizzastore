import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import './Checkout.css'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import CheckoutTable from '../../components/CheckoutTable/CheckoutTable'
import {
    calculateTotal,
    loadPricingRules,
} from '../../services/checkoutservice'
import { updatePricingRules } from '../../state/product/ProductListSlice'
import { useNavigate } from 'react-router-dom'
import { User } from '../../services/authservice'

function Home() {
    const cart = useAppSelector((state) => state.product.cart)
    const pricingRules = useAppSelector((state) => state.product.pricingRules)
    const user = useAppSelector((state) => state.auth.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        async function getPricingRules() {
            const pricingRules = await loadPricingRules()
            dispatch(updatePricingRules(pricingRules))
        }
        getPricingRules()
    }, [dispatch])
    const total = calculateTotal(
        user as User,
        Object.values(cart),
        pricingRules
    )
    function gotoHome(e: React.MouseEvent) {
        navigate('/home')
    }
    return (
        <div className="">
            <Header />
            <Box sx={{ p: 2 }}>
                <h2>Checkout</h2>
                <h3>
                    Selected Items{' '}
                    <Button onClick={gotoHome}>Edit Items</Button>
                </h3>
                <CheckoutTable />
                <h3>Applied Offer</h3>
                {total.appliedPricingRules.map((rule) => (
                    <i key={rule.id} className={'offer-' + rule.id}>
                        {rule.name}
                    </i>
                ))}
                <h3>Total:</h3>{' '}
                <Typography variant="h4" className="total">
                    ${total.total.toFixed(2)}
                </Typography>
            </Box>
        </div>
    )
}

export default Home
