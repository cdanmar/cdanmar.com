import React, { Component } from 'react';
import './Card.css';

class Projectcard extends Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <a href={this.props.url}>
                    <img className="card-img-top" src={this.props.image} alt="Card"></img>
                </a>
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.text}</p>
                </div>
                <div className="card-footer text-center">
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">
                        <a 
                            href={this.props.github} 
                            className="btn btn-outline-dark" role="button">
                            <i className="fa fa-github" aria-hidden="true"></i> GitHub
                        </a>
                        <a href={this.props.url} className="btn btn-outline-primary" role="button">
                            <i className="fa fa-globe" aria-hidden="true"></i> Live
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projectcard