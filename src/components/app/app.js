import { Outlet } from "react-router-dom";

import Divider from "../divider/divider";
import LinksGroup from "../links-group/links-group";

import './app.scss';

export default function App () {
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