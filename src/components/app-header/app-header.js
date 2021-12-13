import Divider from '../divider/divider';
import LinksGroup from '../links-group/links-group';

import './app-header.scss';

const AppHeader = ({page, onPageSelect}) => {
    const headerClass = 'header header_page' + (page+1);
    let headerText = '';
    switch (page) {
        case 0:
            headerText = 'Everything You Love About Coffee';
        case 1:
            headerText = 'Our Coffee';
        case 2:
            headerText = 'For your pleasure';
        case 3:
            headerText = 'Our Coffee';
    }    

    return (
        <header className={headerClass}>
            <div className="container">
                <LinksGroup color='white' onPageSelect={onPageSelect}/>
                <h1 className={page === 0 ? 'header_title shadow' : 'header_title'}>
                    {headerText}
                </h1>
                {page === 0 ? (
                    <>
                        <Divider color="white"/>

                        <h2 className="header_subtitle">We makes every day full of energy and taste</h2>
                        <h2 className="header_subtitle shadow">Want to try our beans?</h2>
                        <button onClick={() => onPageSelect(1)}className="header_btn">More</button>
                    </>
                ) : null}
            </div>
        </header>
    );
}

export default AppHeader;