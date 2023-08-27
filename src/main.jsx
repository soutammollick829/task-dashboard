import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'

//set up router here
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-5'>
    <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
  </div>
)
