import React from 'react';
import './ClickableImage.css';
import img from './Screenshot_1.png'

const ClickableImage = (props) => {
    // const {imageLink} = props
    return (
        <img
            src={img}
            alt="img" className="clickImage"/>
    );
}

export default ClickableImage;
