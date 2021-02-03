import React, {Component} from 'react';
import './Home.css'
import ClickableImage from "./ClickableImage";

class Home extends Component {
    render() {
        return (
            <section className="max-container">
                <div className="grid">
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                    <ClickableImage/>
                </div>
            </section>
        );
    }
}

export default Home;
