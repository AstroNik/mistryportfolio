import React from 'react'
import {connect} from 'react-redux';
import './LayoutImage.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class LayoutImage extends React.Component {

    renderVideo(item) {
        return (
            <div className="video-wrapper">
                <video controls>
                    <source src={item.embedUrl}/>
                </video>
            </div>
        );
    }

    render() {
        const {project} = this.props;
        const mappedImages = project.files && project.files.map((image) => {

            if (image.indexOf(".mp4") > -1 || image.indexOf(".mkv") > -1 || image.indexOf(".mpeg") > -1 || image.indexOf(".mpg") > -1 || image.indexOf(".mov") > -1) {

                return (
                    {
                        embedUrl: image,
                        renderItem: this.renderVideo.bind(this)
                    }
                )
            } else {
                return (
                    {
                        original: image,
                    }
                )
            }

        });

        return (
            <section className="max-container">
                <div className="layout-content p-4">
                    <h2> {project.title} </h2>

                    <div className="layout-grid">
                        <div className="content-div">
                            <img src={project.banner} alt="img"/>
                        </div>
                        <div className="content-div">
                            {project.description}
                        </div>
                    </div>
                    <div className="pt-3 slideshow">
                        <ImageGallery
                            items={mappedImages}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showBullets={true}
                            showThumbnails={false}
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

export default connect(mapStateToProps, null)(LayoutImage);
