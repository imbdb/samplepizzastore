import { cartItem } from '../state/product/ProductListSlice'
import { User } from './authservice'
import { getProductPrice } from './productservice'

enum PricingRuleType {
    FixedPrice = 'FixedPrice',
    PercentageOff = 'PercentageOff',
    GetXForY = 'GetXForY',
}

export interface PricingRule {
    id: string
    name: string
    type: PricingRuleType
    productId: string
    userId: string
    discount?: number
    quantityX?: number
    quantityY?: number
}

class Checkout {
    cartItems: cartItem[] = []

    constructor(private user: User, private pricingRules: PricingRule[]) {}

    add(cartItem: cartItem) {
        this.cartItems.push(cartItem)
    }

    getTotal() {
        let total = 0
        let appliedPricingRules: PricingRule[] = []
        for (const cartItem of this.cartItems) {
            let productPrice = getProductPrice(cartItem.id)
            let price = null
            for (const pricingRule of this.pricingRules) {
                if (
                    this.user.id === pricingRule.userId &&
                    pricingRule.productId === cartItem.id
                ) {
                    switch (pricingRule.type) {
                        case PricingRuleType.FixedPrice:
                            price =
                                (pricingRule.discount as number) *
                                cartItem.quantity
                            appliedPricingRules.push(pricingRule)
                            break
                        case PricingRuleType.PercentageOff:
                            let percentageOffSubtotal =
                                productPrice * cartItem.quantity
                            price =
                                percentageOffSubtotal -
                                (percentageOffSubtotal *
                                    (pricingRule.discount as number)) /
                                    100
                            appliedPricingRules.push(pricingRule)
                            break
                        case PricingRuleType.GetXForY:
                            let quantityX =
                                cartItem.quantity /
                                (pricingRule.quantityX as number)
                            let remainder =
                                cartItem.quantity %
                                (pricingRule.quantityX as number)
                            let subtotal =
                                productPrice *
                                (quantityX * (pricingRule.quantityY as number))
                            let remainderTotal = productPrice * remainder
                            price = subtotal + remainderTotal
                            appliedPricingRules.push(pricingRule)
                            break
                    }
                } else if (price === null) {
                    price = productPrice * cartItem.quantity
                }
            }
            console.log(`${cartItem.id} ${cartItem.quantity} ${price}`)
            total += price as number
        }
        return {
            total: total,
            appliedPricingRules,
        }
    }
}

function calculateTotal(
    user: User,
    cartItems: cartItem[],
    pricingRules: PricingRule[]
) {
    let checkout = new Checkout(user, pricingRules)
    for (const cartItem of cartItems) {
        checkout.add(cartItem)
    }
    return checkout.getTotal()
}

const PricingRules: PricingRule[] = [
    {
        id: '1',
        name: 'Buy 3 Small Pizzas at Price of 2',
        type: PricingRuleType.GetXForY,
        productId: '1',
        userId: '1',
        quantityX: 3,
        quantityY: 2,
    },
    {
        id: '2',
        name: 'Get Large pizza at Price of $19.99',
        type: PricingRuleType.FixedPrice,
        productId: '3',
        userId: '2',
        discount: 19.99,
    },
    {
        id: '3',
        name: 'Buy 5 Medium pizzas at the price of 4',
        type: PricingRuleType.GetXForY,
        productId: '2',
        userId: '3',
        quantityX: 5,
        quantityY: 4,
    },
]

function loadPricingRules(): Promise<PricingRule[]> {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(PricingRules)
        }, 1000)
    })
}

export { Checkout, calculateTotal, loadPricingRules }
