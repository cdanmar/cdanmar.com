import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Card from '../components/Card.jsx';
import Urlcard from "../components/Urlcard.jsx";
import './Home.css';


class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Carlos Martinez" subtitle="Developer, Systems Guy, Tech Enthusiast"></Jumbotron>
        <div className="container">
          <div className="card-deck">
            <Card link="/about" image="https://source.unsplash.com/jay5BqVyf5A/320x200" title="About Me / Contact" text="Learn more about who I am, and how to reach out" />
            <Card link="/portfolio" image="https://source.unsplash.com/cckf4TsHAuw/320x200" title="My Work" text="See what I have been up to"/>
            <Urlcard url="http://resume.cdanmar.com/" image="https://source.unsplash.com/31hjRkCJrdo/320x200" title="My Resume" text="A link to my most current resume" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )
  };
}

export default Home
