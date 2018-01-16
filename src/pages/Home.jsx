import React, { Component } from 'react';
// import Navbar from '../components/Navbar.jsx';
import Matnavbar from '../components/Matnavbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Images from '../components/Images.jsx';


class Home extends Component {
  render () {
    return (
      <div>
        <Matnavbar />
        <Jumbotron title ="Welcome" subtitle="This is a working example of React Router working with bootstrap. Feel free to copy it for your project." />
        <br />
        <div className="container">
          <div className="outer-div">
            <Images />
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
