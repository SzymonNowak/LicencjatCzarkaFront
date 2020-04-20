import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes/index';
import { theme } from './theme/mainTheme';
import Main from './views/main';
import GlobalStyle from './theme/GlobalStyle';
import MainTemplate from './templates/MainTemplate';
import addParcel from './views/addParcel';
import getParcel from './views/getParcel';
import Register from './views/register'
import Login from './views/login';
const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route path={routes.main} component={Main} />
              <Route path={routes.addParcel} component={addParcel} />
              <Route path={routes.getParcel} component={getParcel} />
              <Route path={routes.checkStatus} component={Main} />
              <Route path={routes.login} component={Login} />
              <Route path={routes.register} component={Register} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};


export default Root;
