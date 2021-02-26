import React from 'react';
import './ClickableImage.css';
import {Link} from "react-router-dom";

const ClickableImage = ({projects}) => {
    const mappedData = projects && projects.map((project, index) => {
        if(project.layout === 1){
            return (
                <Link to={'/project/' + project.projectId} key={index}>
                    <img src={project.banner} alt="img" className="clickImage"/>
                </Link>
            );
        } else {
            return (
                <Link to={'/project3D/' + project.projectId} key={index}>
                    <img
                        src={project.banner}
                        alt="img" className="clickImage"/>
                </Link>
            );
        }
    });

    return (
        mappedData
    );
}

export default ClickableImage;
