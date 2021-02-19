import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class AdminMenu extends Component {
    static displayName = AdminMenu.name;

  constructor (props) {
    super(props);

    
  }

  
  render () {
      return (
        <div>
              <h2>This is Admin Menu</h2>
              <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
        </div>
    );
  }
}
