import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './About.css';


class About extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Jumbotron title ="About" subtitle="Who I am, and how to get a hold of me" />
        <div className="container">
          <div className="outer-div">
            <div className="row">
              <div className="inner-divcol-lg-4 col-sm-12 text-center mb-4">
                <img className="rounded" src={require('../images/headshot.jpg')} alt="" />
                <br />
                <h3>Carlos Martinez
                </h3>
                <p className="card-text">Current Job Search Status:  <button type="button" class="btn btn-sm btn-success disabled">Looking</button></p>
                <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="mailto:cdanmar@gmail.com">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/carlos-martinez-17ab15126/">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/cdanmar/react_router_bootstrap">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              </div>
            </div>
            <div>
              <p>
                I'm a bit of an oddball in a world of hyper-specialization. I have a huge, insatiable curiosity for all things tech since I can remember, and this has led me to try out new things and take on increasingly greater challenges. I started out as your typical IT technician, moved up to Systems Administration, and now I am taking on Development and Automation.
              </p>
              <p>
                I feel just as confident building web applications as I do designing the infrastructure that runs them. The way the tech sector is evolving, I often find myself doing both at the same time (for example, creating a React App, setting up an API with AWS API gateway, and deploying to CloudFront, all in one afternoon).
              </p>
              <p>
                My interests are always fluid and varied. Development and Serverless Infrastructure are my current fascinations. Tomorrow, it could be AI and Big Data. The only constant is that I never sit still, and I am always trying to stay ahead of the curve.
              </p>
              <p>
                If you are on the lookout for a down to earth, open minded and inquisitive individual to join your team, you're in luck! I'm always on the lookout for a new challenge, so feel free to reach out!
              </p>

            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    )
  };
}

export default About
