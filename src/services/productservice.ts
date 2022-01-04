import { Product } from '../state/product/ProductListSlice'

const productList: Product[] = [
    {
        id: '1',
        type: 'Pizza',
        name: 'Small Pizza',
        description: `10" pizza for one person `,
        price: 11.99,
    },
    {
        id: '2',
        type: 'Pizza',
        name: 'Medium Pizza',
        description: `12" pizza for two person `,
        price: 15.99,
    },
    {
        id: '3',
        type: 'Pizza',
        name: 'Large Pizza',
        description: `15" pizza for four person `,
        price: 21.99,
    },
]

function getProductPrice(productId: string): number {
    let product = productList.find((product) => product.id === productId)
    return product ? product.price : 0
}

function loadProductList(): Promise<Product[]> {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(productList)
        }, 1000)
    })
}

export { loadProductList, getProductPrice }
