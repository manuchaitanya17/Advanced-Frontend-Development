import React, { createContext, useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider as OriginalRouterProvider } from 'react-router-dom';
import RouterContext from './RouterContext';
import Layout from './Layout';


const RouterProviderEx = ({ router, children }) => {
  
  const useRouter  = useContext(RouterContext);

  /*Step-1: RouterProvider uses useLocation Hook to use the Location Object from the React Library. Location API is used to 
  get the current URL from the Location Bar. This set the values like pathname, search, hash etc. 

  Step-2: The router.matchRoutes function is part of the React Router library and is used to match the current location 
  (URL) against the route configuration. It returns information about the matched routes in array. Each match object 
  contains the following properties:
  - Route: The route object from the route configuration that was matched.
  - Params: An object containing the URL parameters extracted from the matched route.
  - Path: The matched portion of the URL.
  - Url: The matched URL. */
  
  const [state, setState] = useState({
    location: {
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      state: window.history.state,
    },
    matches: router.matchRoutes(window.location.pathname),
  });
  /*  The Array Looks Like: 
  [
    {
      route: {
        path: 'user/:id',
        element: <UserPage />
      },
      
      params: {
        id: '123'
      },
      
      pathname: '/user/123'
    }
  ]
  
  It finds that the root route / with the Layout component matches. It also finds that the child route about under the 
  root route matches. But it couldn't find any component named about inside Layout.jsx. But an Outlet Component. */

  
  useEffect(() => {
    const handlePopState = () => {
      setState({
        location: {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
          state: window.history.state,
        },
        matches: router.matchRoutes(window.location.pathname),
      });
    };

    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [router]);

  
  const navigate = (to, { replace = false, state } = {}) => {
    if (replace) {
      window.history.replaceState(state, '', to);
    } else {
      window.history.pushState(state, '', to);
    }
    setState({
      location: {
        pathname: new URL(to, window.location.origin).pathname,
        search: new URL(to, window.location.origin).search,
        hash: new URL(to, window.location.origin).hash,
        state,
      },
      matches: router.matchRoutes(to),
    });
  };

  /* Step-3: The Context Value Object is stored in the RouterContext. Components that consume the RouterContext (e.g., 
     Outlet) detect the context state change. */
  
  const contextValue = {
    ...state,
    navigate,
    createHref: (location) => new URL(location, window.location.origin).pathname,
    go: (n) => window.history.go(n),
    back: () => window.history.back(),
    forward: () => window.history.forward(),
  };

  return (
    <RouterContext.Provider value={contextValue}>
      <Layout/>
    </RouterContext.Provider>
  );
};






