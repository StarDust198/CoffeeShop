import './app-goods-list.scss'
import Card from '../card/card'

const AppGoodsList = ({cardsData}) => {
    const cards = cardsData.map(({...itemProps}) => {
        return <Card {...itemProps}/>
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