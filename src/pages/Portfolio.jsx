import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Contact.css'


class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Portfolio" subtitle="A brief catalog of my most recent work." />
                <div className="container">
                    <div className="outer-div">
                        <div>
                            <h3>A word about my projects...</h3>
                            <p>
                                Not everything I work on is published as a live site, but it's almost always published on my <a href="https://github.com/cdanmar">github</a>. I am currently working towards making more of my current and past projects presentable so that I may showcase them here.
                           </p>
                           <br />
                            <h3>Project Showcase</h3>
                            <p>
                                All projects include GitHub links and a brief description of the tech used to build them. They also include a link to a live version if available.
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <br />
                <br />

                <Footer />
            </div>
        )
    };
}

export default Portfolio
