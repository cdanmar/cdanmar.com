import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Card from '../components/Card.jsx';
import Urlcard from "../components/Urlcard.jsx";


class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Jumbotron title ="Welcome" subtitle="This is a working example of React Router working with bootstrap. Feel free to copy it for your project." />
        <br />
        <div className="container">
          <div className="outer-div">
            <div className="card-deck">
              <Card link="/about" image="https://source.unsplash.com/jay5BqVyf5A/320x200" title="About Me / Contact" text="Learn more about who I am, and how to reach out" />
              <Card link="/about" image="https://source.unsplash.com/cckf4TsHAuw/320x200" title="My Work" text="See what I have been up to"/>
              <Urlcard url="http://resume.cdanmar.com/" image="https://source.unsplash.com/31hjRkCJrdo/320x200" title="My Resume" text="A link to my most current resume" />
            </div>
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
