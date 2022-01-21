import { Link } from 'react-router-dom';

import './card.scss';

const Card = ({img, name, price, main, country, id}) => {
    let content

    const innerContent = (
        <>
            <img className="card_img" src={img} alt={name}/>
            <div className="card_title">{name}</div>
            {main ? null : <div className='card_location'>{country}</div>}
            <div className="card_price">{`${price}$`}</div>
        </>
    )


    if (main) {
        content = 
            <div className="card card_main">
                {innerContent}
            </div>
    } else {
        content = 
            <Link 
                to={`/coffee/${id}`}
                className="card" 
                style={{cursor: 'pointer', textDecoration: 'none', color: '#000'}}>
                    {innerContent}
            </Link>
    }

    return (
        <>
            {content}
        </>
    )
}

export default Card;