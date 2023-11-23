import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//screens
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Solicitation from './screens/Solicitation'
import ResetPass from './screens/ResetPass'
import Calendar from './screens/Calendar'
import Class from './screens/Class'
import Profile from './screens/Profile'
import Reservation from './screens/Reservation'

const router = createBrowserRouter(
  [
      {
        path: "/",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/resetPass",
        element: <ResetPass />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/reservation",
        element: <Reservation />
      },
      {
        path: "/solicitation",
        element: <Solicitation />
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/class",
        element: <Class />
      },
      {
        path: "/profile",
        element: <Profile />
      },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
