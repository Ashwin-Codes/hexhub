import React from 'react';
import { NavLink } from 'react-router-dom';

// icons
import { SiHexo as Logo } from 'react-icons/si';
import { BiHomeAlt as HomeNavLogo } from 'react-icons/bi';
import { MdOutlineDashboard as ColorsNavLogo } from 'react-icons/md';
import { AiOutlineHeart as SavedColorsNavLogo } from 'react-icons/ai';

export default function Sidebar({ children }) {
  const links = [
    {
      path: '/home',
      name: 'Home',
      icon: <HomeNavLogo className="navlinks-icon" />,
    },
    {
      path: '/colors',
      name: 'Colors',
      icon: <ColorsNavLogo className="navlinks-icon" />,
    },
    {
      path: '/saved-colors',
      name: 'Saved',
      icon: <SavedColorsNavLogo className="navlinks-icon" />,
    },
  ];

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <div className="sidebar">
          <Logo className="sidebar-logo" />
          <div className="sidebar-links">
            {links.map((ele) => (
              <NavLink
                to={ele.path}
                key={ele.name}
                className={({ isActive }) => {
                  return isActive
                    ? 'sidebar-link sidebar-link-active'
                    : 'sidebar-link';
                }}
              >
                {ele.icon}
                <p className="sidebar-navigation-link-name hidden">
                  {ele.name}
                </p>
              </NavLink>
            ))}
          </div>
          <div className="placeholder">hold</div>
        </div>
      </div>
      <main className="app-main">{children}</main>
    </div>
  );
}
