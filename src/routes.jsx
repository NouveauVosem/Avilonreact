import React from 'react'
import App from './App'
import Page from './layouts/Page'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Product from './pages/Product'


const childRoutes = [
  {
    path: '/',
    element: <Page />,
    children: [
      { index: true, element: <Home /> }
    ]
  },
  {
    path: 'gallery',
    element: <Page />,
    children: [
      { index: true, element: <Gallery /> }
    ]
  },
  {
    path: '/products',
    element: <Page />,
    children: [
      { path: ':id', element: <Product /> }
    ]
  },

]

const routes = [
  {
    path: '/',
    element: <App/>,
    children: childRoutes
  },
]

export default routes