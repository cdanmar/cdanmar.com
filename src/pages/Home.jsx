import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Card from '../components/Card.jsx';


class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Jumbotron title ="Welcome" subtitle="This is a working example of React Router working with bootstrap. Feel free to copy it for your project." />
        <br />
        <div className="container">
          <div className="outer-div">
            <Card />
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
