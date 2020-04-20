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
import Main from './views/Main';
import GlobalStyle from './theme/GlobalStyle';
import MainTemplate from './templates/MainTemplate';


const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route path={routes.main} component={Main} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};


export default Root;
