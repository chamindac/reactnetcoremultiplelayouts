import React, { Component } from 'react';
import { Route } from 'react-router-dom';  
import { Container } from 'reactstrap';
import { PublicMenu } from '../menus/publicMenu';

export class PublicLayout extends Component {
  static displayName = PublicLayout.name;

  render () {
    return (
      <div>
        <PublicMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

const PublicLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <PublicLayout>
                <Component {...matchProps} />
            </PublicLayout>
        )} />
    )
};

export default PublicLayoutRoute;