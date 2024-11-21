import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import yellowBricksBackground from "/david-pisnoy-RiGGe25WUw4-unsplash.jpg"
import { FullBackgroundComponent } from './components/FullBackgroundComponent'
import App from './App'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from './Error-page'
import { LoginRegister } from './components/LoginRegister'
import { element } from 'prop-types'

// define routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginRegister />,
    errorElement: <ErrorPage />
  },
  {
    path: 'register',
    element: <LoginRegister />,
    errorElement: <ErrorPage />
  } 

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FullBackgroundComponent image={ yellowBricksBackground }>
      <RouterProvider router={ router } />
    </FullBackgroundComponent>
  </StrictMode>
)
