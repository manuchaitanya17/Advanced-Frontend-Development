import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, className, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const finalClassName = className({ isActive });

  const handleClick = (event) => {
    if (!props.onClick)
      return;
    props.onClick(event);
    if (event.defaultPrevented)
      return;
    event.preventDefault();
  };

  return (
    <Link to={to} className={finalClassName} onClick={handleClick} {...props}>
      {props.children}
    </Link>
  );
};

export default NavLink;
