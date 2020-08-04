import React from 'react';
import { Link } from 'react-router-dom';
const PortfolioPage = () => (
    <div>
      <h3>My Work</h3>
      <p>Check the following things I've done:</p>
      <p><Link to="/Project/1">Project 1</Link></p>
      <p><Link to="/Project/2">Project 2</Link></p>
    </div>
  );

  export default PortfolioPage;