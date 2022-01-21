import { useState } from "react"

import AppHeader from "../app-header/app-header"
import AppAbout from "../app-about/app-about"
import AppFilter from "../app-filter/app-filter"
import AppGoodsList from "../app-goods-list/app-goods-list"

import { getCards } from '../../cards'
import aboutBeansImg from '../../assets/about_beans.jpg'
import aboutGoodsImg from '../../assets/about_goods.png'

export default function OurCoffee({ noFilter }) {
    const [filter, setFilter] = useState('')
    const [term, setTerm] = useState('')

    const cardsData = getCards()

    const searchCards = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    }

    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    const filterCards = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil')
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya')
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia')
            default:
                return items
        }
    }

    const onUpdateFilter = (newFilter) => {
        if (newFilter === filter) {
            setFilter('')
        } else {
            setFilter(newFilter)
        }
    }

    const filterData = filterCards(searchCards(cardsData, term), filter)

    let content

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
                <AppGoodsList cardsData={filterData}/>
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
                <AppGoodsList cardsData={cardsData} />
            </>
        )
    }

    return (
        <>
            {content}
        </>
    )
}