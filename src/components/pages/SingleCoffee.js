import { useParams } from 'react-router-dom'

import AppHeader from '../app-header/app-header'
import AppAboutIt from '../app-about-it/app-about-it'

// temporary
import aboutCoffeeImg from '../../assets/about_coffee.jpg'
import img from '../../assets/best3.png'

export default function SingleCoffee() {
    const params = useParams()

    const cardData = {
        name: 'AROMISTICO Coffee 1 kg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        id: 1,
        img,
        imgBig: aboutCoffeeImg,
        country: 'Brazil',
        price: 6.99
    }

    return (
        <>
            <AppHeader page={3} />
            <AppAboutIt {...cardData}/>
        </>
    )
}