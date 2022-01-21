import { Link } from 'react-router-dom';

import Divider from '../divider/divider'

import './app-header.scss'

const AppHeader = ({page}) => {
    const headerClass = 'header header_page' + (page+1);
    let headerText, headerExtraClass
    switch (page) {
        case 0:
            headerExtraClass = 'shadow'
            headerText = 'Everything You Love About Coffee'
            break
        case 1:
            headerExtraClass = 'shadow'
            headerText = 'Our Coffee'
            break
        case 2:
            headerExtraClass = 'shadow'
            headerText = 'For your pleasure'
            break
        case 3:
            headerExtraClass = 'shadow'
            headerText = 'Our Coffee'
            break
        default:
            break
    }

    return (
        <header className={headerClass}>
            <div className="container">
                <h1 className={'header_title ' + headerExtraClass}>
                    {headerText}
                </h1>
                {page === 0 ? (
                    <>
                        <Divider color="white"/>

                        <h2 className="header_subtitle">We make every day full of energy and taste</h2>
                        <h2 className="header_subtitle shadow">Want to try our beans?</h2>
                        <Link to="/coffee" className="header_btn">More</Link>
                    </>
                ) : null}
            </div>
        </header>
    );
}



export default AppHeader;