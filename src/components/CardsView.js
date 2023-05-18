import products from '../db/ProductsList';
import ShopCard from './ShopCard';
import { v4 } from 'uuid';


export default function CardsView({toggleClass}) {
  return (
    <div className={toggleClass}>{products.map((product) => {
		return <ShopCard product={product} key={v4()}/>
        })}
    </div>
  )
}