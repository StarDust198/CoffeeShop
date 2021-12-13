import { Component } from 'react'

import './app-filter.scss';

class AppFilter extends Component {
    super(props) {
        this.state = {
            term: ''
        }
    }

    render() {
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
                                // value={this.state.term}
                                // onChange={this.onUpdateSearch}
                                />
                        </div>
                        <div className="filter_btns">
                            <div className="filter_btns_label">Or filter</div>
                            <div className="filter_btns_wrapper">
                                <button className="filter_btn">Brazil</button>
                                <button className="filter_btn">Kenya</button>
                                <button className="filter_btn">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>             
            </section>
        )
    }
}

export default AppFilter;
