import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render () {
    return (
      <Fragment>
        <Toolbar 
          drawerToggleClicked={this.sideDrawerToggleHandler}
          isAuth={this.props.isAuthenticated}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerCloseHandler}
          isAuth={this.props.isAuthenticated}/>
        <main className={classes.Content}>
        {this.props.children} 
        </main>
      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  }
}

export default connect(mapStateToProps)(Layout);