import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Divider from "../divider/divider";
import LinksGroup from "../links-group/links-group";

import './app.scss';

export default function App () {
    let cardsList = []

    useEffect(() => {
        fetch('http://localhost:3002/cards')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                cardsList = data;
                console.log(cardsList);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div className="app">
            <div className="container">
                <LinksGroup color="white" />
            </div>
            <Outlet />
            <section className="footer">
                <LinksGroup color="dark"/>
                <Divider color="black"/>
            </section>
        </div>
    )
}