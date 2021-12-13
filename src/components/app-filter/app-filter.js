import { Component } from 'react'

import './app-filter.scss';

class AppFilter extends Component {
    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        const {filter, onUpdateFilter} = this.props;

        const buttonsData = [
            {name: 'Brazil'},
            {name: 'Kenya'},
            {name: 'Columbia'}
        ];
    
        const buttons = buttonsData.map(({name}) => {
            const clazz = `filter_btn${filter === name ? " active" : ""}`
            return (
                <button
                    className={clazz}
                    type="button"
                    key={name}
                    onClick={() => onUpdateFilter(name)}>
                        {name}
                </button>
            )
        })

        return (
            <section className="filter">
                <div className="container">
                    <div className="filter_wrapper">
                        <div className="filter_search">
                            <label htmlFor="search">Lookiing for</label>
                            <input
                                id="search"
                                type="text"
                                className="filter-input"
                                placeholder="start typing here..."
                                value={this.state.term}
                                onChange={this.onUpdateSearch}/>
                        </div>
                        <div className="filter_btns">
                            <div className="filter_btns_label">Or filter</div>
                            <div className="filter_btns_wrapper">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>             
            </section>
        )
    }
}

export default AppFilter;
