import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render () {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt="Card"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Card