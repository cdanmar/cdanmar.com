import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div className="container">
          <span className="text-muted">Made with &lt;3 by <a href="https://github.com/cdanmar">@cdanmar</a></span>
      </div>
    </footer>
    );
  }
}

export default Footer
