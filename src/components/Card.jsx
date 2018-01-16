import React, { Component } from 'react';

class Card extends Component {
    render () {
        return (
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/235x200" alt="Card"></img>
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/235x200" alt="Card"></img>
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/235x200" alt="Card"></img>
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card