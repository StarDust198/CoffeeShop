import './divider.scss';

const Divider = (props) => {
    const clazz = props.color === 'white' ? 'divider_white' : 'divider_black';

    return (
        <div className={`divider ${clazz}`}>
            <div className="line"></div>
            <div className="beans"></div>
            <div className="line"></div>
        </div>
    )
};

export default Divider;