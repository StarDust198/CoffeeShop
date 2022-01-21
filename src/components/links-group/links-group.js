import { Link } from 'react-router-dom';

import './links-group.scss';

const LinksGroup = ({color, /* onPageSelect */}) => {
    const linksData = [
        {
            name: 'Coffee house',
            location: '/'
        },
        {
            name: 'Our coffee',
            location: '/coffee'
        },
        {
            name: 'For your pleasure',
            location: '/goods'
        }
    ];

    const links = linksData.map((link, i) => {
        return (
            <Link
                style={{textDecoration:"none"}}
                to={link.location}
                className="header_link"
                key={i}>
                    {link.name}
            </Link>            
        )
    });

    const clazz = `links_group${color === "dark" ? ' dark' : ''}`;

    return (        
        <nav className={clazz}>
            {links} 
        </nav>
    )
}

export default LinksGroup;