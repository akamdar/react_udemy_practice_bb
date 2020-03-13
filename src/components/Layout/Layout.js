import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  }

  return (
    <Fragment>
      <Toolbar 
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={props.isAuthenticated}/>
      <SideDrawer 
        open={sideDrawerIsVisible} 
        closed={sideDrawerCloseHandler}
        isAuth={props.isAuthenticated}/>
      <main className={classes.Content}>
      {props.children} 
      </main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  }
}

export default connect(mapStateToProps)(Layout);