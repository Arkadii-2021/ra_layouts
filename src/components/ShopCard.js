export default function ShopCard({product}) {
  const {name, price, color, img} = product;
  const currency = (price) => `$${price}`;

  return (
    <div className="card__header">
        <span className="card__name" style={{textTransform: 'uppercase'}}>{name}</span>
        <span className="card__color">{color}</span>

    <div className="card__picture">
        <img className="card__img"
            src={img}
            alt={`${name}_${color}`}/>
    </div>
    <div className="card__store">
        <div className="card__price">{currency(price)}</div>
        <button className="card__button">
            Add to Card
        </button>
    </div>
</div>
  )
}