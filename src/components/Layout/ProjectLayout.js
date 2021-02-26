import React, {Suspense} from 'react'
import {connect} from 'react-redux';
import './ProjectLayout.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import {Canvas} from "react-three-fiber";
import {Model} from "./Model";
import {OrbitControls, TransformControls} from "@react-three/drei";

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
                        original: image,
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
                            {project.layout === 1 ?
                                <div className="content-text">
                                    <img src={project.banner} alt="img"/>
                                </div>
                                :
                                <Canvas camera={{position: [0, 0, 250]}}
                                        style={{height: "500px", backgroundColor: "rgb(229, 229, 229)"}}>
                                    <Suspense fallback={null}>
                                        <Model url={project.tDFiles}/>
                                    </Suspense>
                                    <OrbitControls/>
                                    <TransformControls/>
                                </Canvas>
                            }
                        </div>
                        <div className="content-div">
                            <div className="content-text">
                                {project.description}
                            </div>
                        </div>
                    </div>
                    <div className="slideshow">
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
