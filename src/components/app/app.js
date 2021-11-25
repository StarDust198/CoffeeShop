import { Component } from "react";

import AppHeader from '../app-header/app-header';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
            </div>
        )
    }
}

export default App;