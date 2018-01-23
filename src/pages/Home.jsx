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
        </div>
        <div className="container">
          <div className="card-deck mx-auto">
            <Card link="/about" image="https://source.unsplash.com/jay5BqVyf5A/500x375" title="About Me / Contact" text="Learn more about who I am, and how to reach out" />
            <Card link="/portfolio" image="https://source.unsplash.com/5Ntkpxqt54Y/500x375" title="My Work" text="See what I have been up to"/>
            <Urlcard url="http://resume.cdanmar.com/" image="https://source.unsplash.com/31hjRkCJrdo/500x375" title="My Resume" text="A link to my most current resume" />
          </div>
        </div>
        <div className="card w-75 mx-auto">
          <div className="card-body">
            <h2 className="card-title">Welcome to my Personal Page!</h2>
            <p className="card-text">You have reached cdanmar.com, the personal page of Carlos Martinez. While the domain cdanmar.com has been a central hub of many experiments and projects in the past, the main domain itself has been sitting empty for years...but no more!</p>
            <p className="card-text">Part portfolio, part catalog, I plan to turn cdanmar.com into a repository of apps and tutorials in the hopes it will help someone out in their coding journey. For now, this serves as a landing page for curious recruiters wanting to know more about me and what I have been up to.</p>
            <p className="card-text">Current Job Search Status: <button type="button" class="btn btn-sm btn-success disabled">Looking</button></p>
            
            <a href="https://reactjs.org/" className="card-link">Built with React</a>
            <a href="https://aws.amazon.com/mobile/" className="card-link">Serverless Hosting via AWS</a>
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
