import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Patient from './components/Patient.jsx';
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx';
import ProtectedRoute_Dashboard from './components/ProtectedRoute_Dashboard.jsx'
import ProtectedRoute_Patien from './components/ProtectedRoute_Patien.jsx'
import UpdatePatient from './components/UpdatePatient.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/patient",
    element: 
      <ProtectedRoute_Patien>
        <Patient />
      </ProtectedRoute_Patien>
  },
  {
    path: "/update/:id",
    element: <UpdatePatient />
  },
  {
    path: "/dashboard",
    element:
      <ProtectedRoute_Dashboard>
        <Dashboard />
      </ProtectedRoute_Dashboard>

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
