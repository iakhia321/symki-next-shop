import ProductList from './../../Card/Card'
import { products } from './../../CardList/CardList'

export default function ShopCard() {
    return(
        <>
        <ProductList products={products} />
        </>
    )
}

