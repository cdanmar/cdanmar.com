import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
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
            </div>
        );
    }
}

export default Card