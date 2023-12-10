import Carousel from './Slider/Carousel'
import ProductList from './Card/Card'
import { products } from './CardList/CardList'
import "./home.sass"
import gta from './../image/gta.png'
import Image from 'next/image'







export default function Page(){
    return (
    
        
     <div className="Selars">
    
    <Image
      src={gta}
      width={1500}
      height={500}
      alt="Picture of the author"
    />
          <h1 className="Selars__popular">Most Popular</h1>
          <>
          <Carousel/>
          <ProductList products={products} />
          </>
        
     </div>
    )
}