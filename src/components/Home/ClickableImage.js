import React from 'react';
import './ClickableImage.css';
import img from './Screenshot_1.png'
import {Link} from "react-router-dom";

const ClickableImage = ({projects}) => {
    const mappedData = projects && projects.map((project, index) => {
        if(project.layout === 1){
            return (
                <Link to={'/project/' + project.projectId} key={index}>
                    <img
                        src={project.bannerImage}
                        alt="img" className="clickImage"/>
                </Link>
            );
        } else {
            return (
                <Link to={'/project/threeD/' + project.projectId} key={index}>
                    <img
                        src={img}
                        alt="img" className="clickImage"/>
                </Link>
            );
        }
    })

    return (
        <Link to={'/project/threeD/' + 1} key={1}>
            <img
                src={img}
                alt="img" className="clickImage"/>
        </Link>
    );
}

export default ClickableImage;
