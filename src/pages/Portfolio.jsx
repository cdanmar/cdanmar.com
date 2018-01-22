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
                <div className="container">
                    <div className="outer-div">
                        <div>
                           <br />
                            <h3 className="inner-divcol-lg-4 col-sm-12 text-center mb-4">Project Showcase</h3>
                            <p>
                                All projects include GitHub links and a brief description of the tech used to build them. They also include a link to a live version if available. 
                                Not all my projects have live sites, but most are published on my <a href="https://github.com/cdanmar">GitHub</a>. 
                                I am currently working towards making all my projects presentable so that I may showcase them here.

                            </p>
                            <div className="card-deck">
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
                            <div className="card-deck">
                                <Projectcard
                                    title="Back of the Yards Coffee"
                                    text="Website I contributed to during my time at the Difference Engine."
                                    url="http://resume.cdanmar.com/"
                                    github="https://github.com/cdanmar/react_router_bootstrap"
                                    image="https://source.unsplash.com/31hjRkCJrdo/320x240"
                                />
                                <Projectcard
                                    title="Back of the Yards Coffee"
                                    text="Website I contributed to during my time at the Difference Engine."
                                    url="http://resume.cdanmar.com/"
                                    github="https://github.com/cdanmar/react_router_bootstrap"
                                    image="https://source.unsplash.com/31hjRkCJrdo/320x240"
                                />
                                <Projectcard
                                    title="Back of the Yards Coffee"
                                    text="Website I contributed to during my time at the Difference Engine."
                                    url="http://resume.cdanmar.com/"
                                    github="https://github.com/cdanmar/react_router_bootstrap"
                                    image="https://source.unsplash.com/31hjRkCJrdo/320x240"
                                />
                            </div>
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
