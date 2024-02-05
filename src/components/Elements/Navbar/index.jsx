// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './nav_item';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavItem size="text-lg" to="/">Anime Vault</NavItem>
        <div className="space-x-4 flex flex-row">
         <NavItem to="/search">Search</NavItem>
         <NavItem to="/search">Airing</NavItem>
         <NavItem to="/search">Upcoming</NavItem>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
