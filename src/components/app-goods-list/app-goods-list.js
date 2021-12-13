import './app-goods-list.scss';
import Card from '../card/card';
import img from '../../assets/best3.png';

const AppGoodsList = (props) => {
    const cardsData = [
        {
            name: 'AROMISTICO Coffee 1 kg',
            img,
            country: 'Brazil',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            img,
            country: 'Kenya',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            img,
            country: 'Columbia',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            img,
            country: 'Brazil',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            img,
            country: 'Brazil',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            img,
            country: 'Brazil',
            price: 6.99
        }
    ]

    const cards = cardsData.map(({...itemProps}, i) => {
        return (
            <Card 
                key={i}
                {...itemProps}/>
        )
    })

    return (
        <section className="goods">
            <div className="container">
                <div className='goods_wrapper'>
                    {cards}
                </div>
            </div>
        </section>
    )
}

export default AppGoodsList;