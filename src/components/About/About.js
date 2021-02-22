import React from 'react';
import ImageGallery from "react-image-gallery";
import img1 from './img/river.jpg';
import img2 from './img/mihir.jpg';
import img3 from './img/f1.jpg';
import img4 from './img/batman.jpg';
import img5 from './img/raptors.jpg';
import img6 from './img/sub.jpg';
import img7 from './img/pallet.jpg';
import img8 from './img/flowerPot.jpg';
import './About.css'

const images = [
    {
        original: img1,
        thumbnail: img1
    },
    {
        original: img2,
        thumbnail: img2
    },
    {
        original: img3,
        thumbnail: img3
    },
    {
        original: img4,
        thumbnail: img4
    },
    {
        original: img5,
        thumbnail: img5
    },
    {
        original: img6,
        thumbnail: img6
    },
    {
        original: img7,
        thumbnail: img7
    },
    {
        original: img8,
        thumbnail: img8
    },
]


const About = () => {
    return (
        <section className="max-container">
            <div className="about-layout">
                <div className="about-container-div1">
                    <div className="about-content">
                        <h3> About Me</h3>
                        <p>Recent Mechanical Engineer and Computing Technology Graduate,
                            with a fundamental understanding of CAD, Mechanical, and Mechatronic Design
                            and passion for Product Design, Robotics, and Additive Manufacturing.
                            I am also interested in the automotive and racing world including F1,
                            WEC, WRC. I enjoy photography, wood-working, sketching, and watching my
                            hometown Toronto Raptors when I get the opportunity.</p>
                        <hr/>
                        <h4> Contact </h4>
                        <p> Toronto, ON </p>
                        <p> mihirmistry964@gmail.com </p>
                        <p> Tel: 647-226-2721 </p>
                    </div>
                </div>
                <div className="about-container-div2">
                    <div className="images-bigger">
                        <ul id="hexGrid">
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img1} alt="river"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img2} alt="mihir"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img3} alt="renault"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img4} alt="batman"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img5} alt="raptors"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img6} alt="sub"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img7} alt="pallet"/>
                                </div>
                            </li>
                            <li className="hex">
                                <div className="hexIn">
                                    <img src={img8} alt="flowerPot"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="images-smaller">
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
