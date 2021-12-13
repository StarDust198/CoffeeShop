import Title from '../title/title';

import './app-about.scss';

const aboutText = [
    <p className="text">Extremity sweetness difficult behaviour he of. On<br/>disposal of as landlord horrible.<br/><br/>Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/> so questions.<br/>As greatly removed calling pleased improve an.<br/>Last ask him cold feel<br/>met spot shy want. Children me laughing we<br/>prospect answered followed. At it went<br/>is song that held help face.</p>,
    <p className="text">Extremity sweetness difficult behaviour he of. On<br/>disposal of as landlord horrible.<br/><br/>Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/> so questions.<br/>As greatly removed calling pleased improve an.<br/>Last ask him cold feel<br/>met spot shy want. Children me laughing we<br/>prospect answered followed. At it went<br/>is song that held help face.</p>    
]

const AppAbout = (props) => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about_wrapper">
                        <div className="about_image">
                            <img src={props.img} alt={props.alt}/>
                        </div>
                        <div className="about_text">
                            <Title text={props.title}/>
                            <p className="text">{aboutText[0]}</p>
                        </div>            
                    </div>
                    <div className="about_line"></div>
                </div>
            </section>            
        </>
    )
}

export default AppAbout;