import { Component } from "react";

import AppHeader from '../app-header/app-header';
import AppAboutUs from '../app-about-us/app-about-us';
import AppBest from "../app-best/app-best";
import AppFooter from "../app-footer/app-footer"
import AppAbout from "../app-about/app-about";
import AppFilter from "../app-filter/app-filter";
import AppGoodsList from "../app-goods-list/app-goods-list";
import AppAboutIt from "../app-about-it/app-about-it";

import aboutBeansImg from '../../assets/about_beans.jpg';
import aboutGoodsImg from '../../assets/about_goods.png';

//Temporary items
import aboutCoffeeImg from '../../assets/about_coffee.jpg';
import img from '../../assets/best3.png';

import './app.scss';


class App extends Component {

    state = {
        selectedPage: 3,
        term: '',
        filter: '',
        goodId: 1
    }

    cardsData = [
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

    onPageSelect = (num, id = 1) => {
        this.setState({
            selectedPage: num,
            goodId: id
        })
    }

    searchCards = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterCards = (items, filter) => {

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

    onUpdateFilter = (filter) => {
        if (this.state.filter === filter) {
            this.setState({filter: ''})
        } else {
            this.setState({filter});
        }
    }

    renderPage(page) {
        const { term, filter, goodId } = this.state;

        switch(page) {
            case 0:
                return (
                    <>
                        <AppAboutUs/>
                        <AppBest/>
                    </>
                )
            case 1:
                const filterData = this.filterCards(this.searchCards(this.cardsData, term), filter);

                return (
                    <>
                        <AppAbout 
                            img={aboutBeansImg}
                            alt="Our famous beans"
                            title="About our beans"/>
                        <AppFilter
                            onUpdateSearch={this.onUpdateSearch}
                            filter={filter}
                            onUpdateFilter={this.onUpdateFilter}/>
                        <AppGoodsList
                            cardsData={filterData}
                            onPageSelect={this.onPageSelect}/>
                    </>
                )
            case 2:
                return (
                    <>
                        <AppAbout 
                            img={aboutGoodsImg}
                            alt="Coffee picture"
                            title="About our goods"/>
                        <AppGoodsList
                            cardsData={this.cardsData}
                            onPageSelect={this.onPageSelect}/>
                    </>
                )
            case 3:
                return (
                    <>
                        <AppAboutIt {...this.cardsData[goodId - 1]}/>                         
                    </>
                )
        }
    }

    render() {        
        const content = this.renderPage(this.state.selectedPage);

        return (
            <div className="app">
                <AppHeader 
                    page={this.state.selectedPage}
                    onPageSelect={this.onPageSelect}/>
                {content}                
                <AppFooter onPageSelect={this.onPageSelect}/>
            </div>            
        )
    }
}

export default App;