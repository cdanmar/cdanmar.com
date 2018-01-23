import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Projectcard from '../components/Projectcard.jsx'
import './Contact.css'


class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Portfolio" subtitle="A catalog of my most recent work." />
                <div className="card w-75 mx-auto">
                    <div className="card-body">
                        <h2 className="card-title">Project Showcase</h2>
                        <p className="card-text">A curated list of projects I have been working on lately.</p>
                        <p className="card-text">More recent projects are usually built in React, while past projects are mostly built on Ruby on Rails. Not everything is "live", I am currently in the process of migrating a lot of projects to AWS.</p>
                        <p className="card-text"><b>Note:</b> Some of these projects are hosted on Heroku Free Tier. This means they need a second to "spin up" once you click on the link.</p>
                        <a href="https://github.com/cdanmar" className="btn btn-outline-dark"> <i className="fa fa-github" aria-hidden="true"></i> Check out my GitHub!</a>
                    </div>
                </div>
                <div className="container">
                        <div>
                        <div className="card-deck mx-auto">
                                <Projectcard 
                                    title="Back of the Yards Coffee" 
                                    text="Website I contributed to during my time at the Difference Engine."
                                    url="https://qa-back-yards-coffee.herokuapp.com/" 
                                    github="https://github.com/the-difference-engine/back-yards-coffee-app" 
                                    image="https://source.unsplash.com/TYIzeCiZ_60/500x375" 
                                />
                                <Projectcard
                                    title="EventMGR"
                                    text="Capstone Project at Actualize. NFC based event management app."
                                    // url=""
                                    github="https://github.com/cdanmar/eventmgr"
                                    image="https://res.cloudinary.com/cdanmar/image/upload/w_500,c_scale/v1516516168/cdanmar/thepi.jpg"
                                />
                                <Projectcard
                                    title="JS Clock"
                                    text="Clock I built as part of the JavaScript 30 Challenge."
                                    url="https://cdanmar.github.io/js-clock/"
                                    github="https://github.com/cdanmar/js-clock"
                                    image="https://res.cloudinary.com/cdanmar/image/upload/w_320,c_fit/v1516421505/toys/js_clock.png"
                                />
                            </div>
                            <div className="card-deck mx-auto">
                                <Projectcard
                                    title="YouTube Toy App"
                                    text="Based on my very first React app. Designed to practice working with APIs."
                                    url="https://youtube.cdanmar.com/"
                                    github="https://github.com/cdanmar/react_youtube"
                                    image="https://res.cloudinary.com/cdanmar/image/upload/w_500,c_scale/v1516686690/toys/youtube_toy.png"
                                />
                                <Projectcard
                                    title="React Router/Bootstrap Template"
                                    text="I created this template to help me get started on my React projects faster. This site is based on this template!"
                                    url="http://react-bt-template.cdanmar.com/"
                                    github="https://github.com/cdanmar/react_router_bootstrap"
                                    image="https://res.cloudinary.com/cdanmar/image/upload/w_500,c_scale/v1516738430/toys/bootstrap_react.png"
                                />
                                <Projectcard
                                    title="JS Drum"
                                    text="Toy app I created to experiment key/browser interaction in JavaScript"
                                    url="https://cdanmar.github.io/js-drum/"
                                    github="https://github.com/cdanmar/js-drum/tree/master"
                                    image="https://res.cloudinary.com/cdanmar/image/upload/w_500,c_scale,/v1516740643/toys/drum2.png"
                                />
                            </div>
                        </div>
                </div>
                <br />
                <br />

                <Footer />
            </div>
        )
    };
}

export default Portfolio
