import React, { FC, Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';

const Layout: FC = ({ children }) => (
  <Fragment>
    <CssBaseline />
    {/* <Header /> */}
    <main>{children}</main>
  </Fragment>
);

export { Layout };
