import './app-goods-list.scss';
import Card from '../card/card';


const AppGoodsList = ({cardsData, onPageSelect}) => {
    const cards = cardsData.map(({...itemProps}) => {
        return (
            <Card 
                {...itemProps}
                onPageSelect={onPageSelect}/>
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