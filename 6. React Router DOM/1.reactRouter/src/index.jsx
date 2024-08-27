import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/ContactUS/Contactus.jsx'

const router1 = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: "",
				element: <Home/>
			},
			{
				path: "about",
				element: <About />
			},
			{
				path: "contactus",
				element: <Contactus />
			}
		]
	}
])


/* Router Object returned by creatBrowserRouter() used interanlly by RouterProvider

{
  routes: [
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> }
  ],
	
  state: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      state: null
    },
		
    matches: [
      {
        route: { path: '/', element: <Home /> },
        pathname: '/',
        params: {}
      }
    ]
  },
	
  basename: '',
	
  future: {},
	
  navigate: [Function: navigate],
  createHref: [Function: createHref],
  addListener: [Function: addListener],
  removeListener: [Function: removeListener],
  matchRoutes: [Function: matchRoutes]
	
}  */



//Another way to return Router Object:
const router2 = createBrowserRouter(
	createRoutesFromElements(
		<Route path='//' element={<Layout />}>
			<Route path='' element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='contact' element={<Contactus />} />
		</Route>
	)
)




ReactDOM.createRoot(document.getElementById('root')).render(
		<RouterProvider router={router1}></RouterProvider>
)



	   
