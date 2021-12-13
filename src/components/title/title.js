import Divider from '../divider/divider';

import './title.scss';

const Title = (props) => {
    return (
        <>
            <h2 className="title">{props.text}</h2>
            <Divider color="black"/>
        </>
    )
}

export default Title;