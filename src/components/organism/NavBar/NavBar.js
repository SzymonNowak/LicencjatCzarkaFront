import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../../routes/index';
import Button from '../../atoms/Button/Button';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-around;
  display: flex;
  box-shadow: 0px 0px 10px #e1e1e1;
  letter-spacing: 1px;
  background-color: white;
  font-size: 17px;
`;

const ListItem = styled.li`
  list-style: none;
  margin-left: 30px;
  font-size:${({ theme }) => theme.fontSize.xxs};
`;

const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &:visited {
    color: black;
  }
  &:hover {
    color: #fd79a8;
  }
  &.active {
    color: ${({ theme }) => theme.blue};
  }
`;

const ListOfNavItem = styled.ul`
  width: 50%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const NavBar = () => {
  return (
    <Nav>
      <UserBoxWrapper>
        <StyledLink to={routes.main}> <i class="fas fa-hamburger"></i>  Kurier app </StyledLink>
      </UserBoxWrapper>
      <ListOfNavItem>
        <ListItem>
          <StyledLink to={routes.addParcel}> Add pack</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.getParcel}> Get pack from client</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.checkStatus}> check status</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.register}>
            <Button> Register</Button>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to={routes.login}>
            <Button>Login</Button>
          </StyledLink>
        </ListItem>
      </ListOfNavItem>
    </Nav>
  );
};




export default NavBar;
