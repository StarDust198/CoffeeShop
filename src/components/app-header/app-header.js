import './app-header.css';

const AppHeader = () => {
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
                key={i}>
                    {name}
            </a>            
        )
    });

    return (
        <header className="header">
            <div className="links_group">
                {links}
            </div>            
        </header>
    );
}

export default AppHeader;