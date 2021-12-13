import Title from '../title/title';

import './app-about-it.scss';

const AppAboutIt = ({img, name, country, description, price}) => {
    return (
        <>
            <section className="aboutit">
                <div className="container">
                    <div className="aboutit_wrapper">
                        <div className="aboutit_image">
                            <img src={img} alt={name}/>
                        </div>
                        <div className="aboutit_text">
                            <Title text="About it"/>
                            <p className="text"><b>Country:</b> {`${country}`}
                            <br/><br/>
                            <b>Description:</b> {`${description}`}
                            <br/><br/>
                            <b>Price:</b> <b style={{'fontSize': 28}}>{`${price}$`}</b></p>
                        </div>            
                    </div>
                </div>
            </section>            
        </>
    )
}

export default AppAboutIt;