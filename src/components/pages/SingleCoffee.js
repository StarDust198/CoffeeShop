import { useParams } from 'react-router-dom'

import AppHeader from '../app-header/app-header'
import AppAboutIt from '../app-about-it/app-about-it'
import { getCard } from '../../cards'

export default function SingleCoffee() {
    const params = useParams()
    const cardData = getCard(+params.coffeeId)

    return (
        <>
            <AppHeader page={3} />
            <AppAboutIt {...cardData}/>
        </>
    )
}