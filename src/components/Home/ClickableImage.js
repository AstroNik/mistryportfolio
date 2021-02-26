import React from 'react';
import './ClickableImage.css';
import {Link} from "react-router-dom";

const ClickableImage = ({projects}) => {
    const mappedData = projects && projects.map((project, index) => {
        return (
            <Link to={'/project/' + project.projectId} key={index}>
                <img src={project.banner} alt="img" className="clickImage"/>
            </Link>
        );
    });

    return (
        mappedData
    );
}

export default ClickableImage;
