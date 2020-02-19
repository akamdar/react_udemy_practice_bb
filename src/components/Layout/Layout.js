import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

const layout = (props) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
     {props.children} 
    </main>
  </Fragment>
);

export default layout;