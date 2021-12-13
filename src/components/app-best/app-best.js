import Card from '../card/card'

import './app-best.scss';
import best1 from '../../assets/best1.png';
import best2 from '../../assets/best2.png';
import best3 from '../../assets/best3.png';

const AppBest = (props) => {
    return (
        <section className="best">
            <div className="container">
                <h2>Our best</h2>
                <div className="card_group">
                    <Card img={best1}
                        main
                        name='Solimo Coffee Beans 2 kg'
                        price='10.73'/>
                    <Card img={best2}
                        main
                        name='Presto Coffee Beans 1 kg'
                        price='15.99'/>
                    <Card img={best3}
                        main
                        name='AROMISTICO Coffee 1 kg'
                        price='6.99'/>
                </div>
            </div>
        </section>
    )
}

export default AppBest;