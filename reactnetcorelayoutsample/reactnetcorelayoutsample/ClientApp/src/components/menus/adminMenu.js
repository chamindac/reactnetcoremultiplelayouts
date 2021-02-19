import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AdminMenu extends Component {
    static displayName = AdminMenu.name;

  constructor (props) {
    super(props);

    
  }

  
  render () {
      return (
        <div>
            <h2>This is Admin Menu</h2>
            <a tag={Link} className="text-dark" to="/">Home</a>
        </div>
    );
  }
}
