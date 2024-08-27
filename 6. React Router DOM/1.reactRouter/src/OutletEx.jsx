import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

const OutletEx = () => {
 
  /*Step-4: useRoutes(): This hook takes two arguments: An array of route objects ({ path, element } pairs) of the Parent. 
    The children array of Layout is passed. The current pathname (location.pathname) from useLocation(). useRoutes() returns
    an element (ReactElement) that corresponds to the matched route. If no route matches the current pathname, it returns 
    null. */
  
  const location = useLocation();
  const element = useRoutes([
    {
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contactus',
      element: <Contactus />
    }
  ], location.pathname);

  return element ? React.cloneElement(element) : null;
};