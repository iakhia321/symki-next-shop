import Link from 'next/link';
import Image from 'next/image';
import sumka5 from '../../image/symka5.jpg';
import sumka1 from '../../image/symka1.jpg';



const removeItemFromList = id => {

}

const Shop = () => {
  return (
    <>
      <a href="https://www.example.com">
        <Image src={sumka5} alt="sumka" width={300} height={200} />
      </a>

      <a href="https://www.example.com">
        <Image src={sumka1} alt="sumka" width={300} height={200} />
      </a>

      <div className='menu'>
        <ul className='shop_menu'>
          <li>
            <Link href="/home">
              <a>All Products</a>
            </Link>
          </li>

          <li>
            <Link href="/home">
              <a>Bags</a>
            </Link>
          </li>

          <li>
            <Link href="/home">
              <a>Basket</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Shop;
