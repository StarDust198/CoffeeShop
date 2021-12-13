import './card.scss';

const Card = ({img, name, price, main, country, description}) => {
    const clazz = `card ${main ? 'card_main' : ''}`;

    return (
        <div className={clazz}>
            <img className="card_img" src={img} alt={name}/>
            <div className="card_title">{name}</div>
            {main ? null : <div className='card_location'>{country}</div>}
            <div className="card_price">{`${price}$`}</div>
        </div>
    )
}

export default Card;