import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 12px;
  background: linear-gradient(to bottom, #7927b200, #ff00aa7a);
  height: 80px;
  font-weight: 600;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: #ffffff;
  }
`;
