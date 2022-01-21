import { useState } from "react";

import AppHeader from "../app-header/app-header";
import AppAbout from "../app-about/app-about";
import AppFilter from "../app-filter/app-filter";
import AppGoodsList from "../app-goods-list/app-goods-list";

import aboutBeansImg from '../../assets/about_beans.jpg';
import aboutGoodsImg from '../../assets/about_goods.png';

// temporary
import aboutCoffeeImg from '../../assets/about_coffee.jpg';
import img from '../../assets/best3.png';

export default function OurCoffee({ noFilter }) {
    const [filter, setFilter] = useState('')
    const [term, setTerm] = useState('')

    const cardsData = [
        {
            name: 'AROMISTICO Coffee 1 kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: 1,
            img,
            imgBig: aboutCoffeeImg,
            country: 'Brazil',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: 2,
            img,
            imgBig: aboutCoffeeImg,
            country: 'Kenya',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: 3,
            img,
            imgBig: aboutCoffeeImg,
            country: 'Columbia',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: 4,
            img,
            imgBig: aboutCoffeeImg,
            country: 'Brazil',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: 5,
            img,
            imgBig: aboutCoffeeImg,
            country: 'Brazil',
            price: 6.99
        },
        {
            name: 'AROMISTICO Coffee 1 kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: 6,
            img,
            imgBig: aboutCoffeeImg,
            country: 'Brazil',
            price: 6.99
        }
    ]

    const searchCards = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterCards = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    const onUpdateFilter = (newFilter) => {
        if (newFilter === filter) {
            setFilter('')
        } else {
            setFilter(newFilter);
        }
    }

    const filterData = filterCards(searchCards(cardsData, term), filter);

    let content

    console.log(noFilter)
    
    if (!noFilter) {
        content = (
            <>
                <AppHeader page={1} />
                <AppAbout 
                    img={aboutBeansImg}
                    alt="Our famous beans"
                    title="About our beans"/>
                <AppFilter
                    onUpdateSearch={onUpdateSearch}
                    filter={filter}
                    onUpdateFilter={onUpdateFilter}/>
                <AppGoodsList
                    cardsData={filterData}
                    /* onPageSelect={onPageSelect} *//>
            </>
        )
    } else {
        content = (
            <>
                <AppHeader page={2} />
                <AppAbout 
                    img={aboutGoodsImg}
                    alt="Coffee picture"
                    title="About our goods"/>
                <AppGoodsList
                    cardsData={cardsData}
                    /* onPageSelect={onPageSelect} *//>
            </>
        )
    }

    return (
        <>
            {content}
        </>
    )
}