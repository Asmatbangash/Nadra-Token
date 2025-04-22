import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, About, Token, Contact, Login, SignUp } from './Pages/Index.js'
import { TokenForm } from './Components/Comp_index.js'

const router = createBrowserRouter([
{path: '/', element:<App />, children:[
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/tokens', element: <Token/>},
  {path: '/contact-us', element: <Contact/>},
  {path: '/token-generating-form', element: <TokenForm />}
]},
{path: '/login', element: <Login/>},
{path: '/sign-up', element: <SignUp/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
