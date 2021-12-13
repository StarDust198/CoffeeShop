import './links-group.scss';

const LinksGroup = ({color, onPageSelect}) => {
    const linksData = [
        'Coffee house',
        'Our coffee',
        'For your pleasure'
    ];

    const links = linksData.map((name, i) => {
        return (
            <a
                className="header_link"
                src="#"
                onClick={(e) => {
                    e.preventDefault();
                    onPageSelect(i);
                }}
                key={i}>
                    {name}
            </a>            
        )
    });

    const clazz = `links_group${color === "dark" ? ' dark' : ''}`;

    return (        
        <div className={clazz}>
            {links} 
        </div>
    )
}

export default LinksGroup;