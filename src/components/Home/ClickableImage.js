import React from 'react';
import './ClickableImage.css';
import {Link} from "react-router-dom";

const ClickableImage = ({projects}) => {
    const mappedData = projects && projects.map((project) => {
        return (
            <Link to={'/project/' + project.projectId} id="img-wrapper">
                <img src={project.banner} alt="img" className="clickImage"/>
                <div className="div-on-img"> <h2> {project.title} </h2> </div>
            </Link>
        );
    });

    return (
        mappedData
    );
}

export default ClickableImage;
