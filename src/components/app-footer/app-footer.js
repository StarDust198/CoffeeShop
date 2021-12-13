import LinksGroup from '../links-group/links-group';
import Divider from '../divider/divider';

import './app-footer.scss';

const AppFooter = ({onPageSelect}) => {
    return (
        <section className="footer">
            <LinksGroup color="dark" onPageSelect={onPageSelect}/>
            <Divider color="black"/>
        </section>
    )
}

export default AppFooter;