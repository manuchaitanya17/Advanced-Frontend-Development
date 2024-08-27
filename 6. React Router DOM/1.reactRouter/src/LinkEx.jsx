import React from 'react';
import { useNavigate } from 'react-router-dom';

const Link = ({ to, replace = false, state, ...rest }) => {

  //Step-1: Get the navigate function from react-router-dom/RouterProvider
  const navigate = useNavigate();

  const handleClick = (event) => {
    //Step-2: Prevent default anchor click behavior:
    event.preventDefault();

    //Step-3: Check if the navigation should be handled by React Router:
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }

    //Step-4:  Navigate to the new location:
    navigate(to, { replace, state });
  };

  return <a href={to} onClick={handleClick} {...rest} />;
};

export default Link;
