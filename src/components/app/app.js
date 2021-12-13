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

//Temporary
import aboutCoffeeImg from '../../assets/about_coffee.jpg';

import './app.scss';


class App extends Component {

    state = {
        selectedPage: 3
    }

    onPageSelect = (num) => {
        this.setState({
            selectedPage: num
        })
    }

    renderPage(page) {
        switch(page) {
            case 0:
                return (
                    <>
                        <AppAboutUs/>
                        <AppBest/>
                    </>
                )
            case 1:
                return (
                    <>
                        <AppAbout 
                            img={aboutBeansImg}
                            alt="Our famous beans"
                            title="About our beans"/>
                        <AppFilter/>
                        <AppGoodsList/>
                    </>
                )
            case 2:
                return (
                    <>
                        <AppAbout 
                            img={aboutGoodsImg}
                            alt="Coffee picture"
                            title="About our goods"/>
                        <AppGoodsList/>
                    </>
                )
            case 3:
                return (
                    <>
                        <AppAboutIt
                            img={aboutCoffeeImg}
                            name="Our goods"
                            country="Brazil"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            price="16.99"/>                            
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