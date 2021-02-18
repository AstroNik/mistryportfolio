import React from 'react'
import {connect} from 'react-redux';
import './LayoutImage.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class LayoutImage extends React.Component {
    render() {
        const {project} = this.props;
        const mappedImages =  project.files && project.files.map((image,index) => {
            return (
                {
                    original: image,
                    thumbnail: image
                }
            )
        });

        return (
            <section className="max-container">
                <div className="p-4">
                    <h2> {project.title} </h2>
                    <div className="layout-grid">
                        <div className="content-div">
                            <img src={project.banner} alt="img" className="banner-image"/>
                        </div>
                        <div className="content-div">
                            {project.description}
                        </div>
                    </div>
                    <div className="pt-3 h-25">
                        <ImageGallery
                            items={mappedImages}
                            showPlayButton={false}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = Number(ownProps.match.params.id);
    const projects = state.projects.projects;
    const project = projects.find(item => item.projectId === id);
    return {
        project: project
    }
}

export default  connect(mapStateToProps,null)(LayoutImage);
