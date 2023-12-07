import Carousel from './Slider/Carousel'
import ProductList from './Card/Card'
import { products } from './CardList/CardList'




export default function Page(){
    return (
     <div className="Selars">
          <h1>Most Popular</h1>
          <>
          <Carousel/>
          <ProductList products={products} />
          </>
        
     </div>
    )
}