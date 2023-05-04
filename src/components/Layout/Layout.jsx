import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { NavLink } from 'react-router-dom';
import { Header, Nav, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};
