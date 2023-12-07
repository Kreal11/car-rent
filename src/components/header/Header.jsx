import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkWrapper } from './Header.styled';

export const Header = () => {
  return (
    <NavLinkWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </NavLinkWrapper>
  );
};
