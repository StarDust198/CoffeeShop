import img from './assets/best3.png'
import imgBig from './assets/about_coffee.jpg'

const cards = [
    {
        name: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 1,
        img,
        imgBig,
        country: "Brazil",
        price: 6.99
    },
    {
        name: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 2,
        img,
        imgBig,
        country: "Kenya",
        price: 6.99
    },
    {
        name: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 3,
        img,
        imgBig,
        country: "Columbia",
        price: 6.99
    },
    {
        name: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 4,
        img,
        imgBig,
        country: "Brazil",
        price: 6.99
    },
    {
        name: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 5,
        img,
        imgBig,
        country: "Brazil",
        price: 6.99
    },
    {
        name: "AROMISTICO Coffee 1 kg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 6,
        img,
        imgBig,
        country: "Brazil",
        price: 6.99
    }
]

export function getCards() {
    return cards
}

export function getCard(id) {
    return cards.find(
        card => card.id === id
    )
}