import React, { Component } from 'react';
import { Route } from 'react-router-dom';  
import { Container } from 'reactstrap';
import { AdminMenu } from '../menus/adminMenu';

export class AdminLayout extends Component {
  static displayName = AdminLayout.name;

  render () {
    return (
      <div>
        <div><AdminMenu /></div>
        <div>
            <Container>
              {this.props.children}
            </Container>
        </div>
      </div>
    );
  }
}

const AdminLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <AdminLayout>
                <Component {...matchProps} />
            </AdminLayout>
        )} />
    )
};

export default AdminLayoutRoute;
