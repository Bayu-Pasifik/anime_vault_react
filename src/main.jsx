import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/mainPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const pages = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={pages}></RouterProvider>
  </React.StrictMode>,
)
