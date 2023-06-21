import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import LandingPage from "./components/LandingPage";
import './styles.scss';
const Layout = () => {
  return (
    <>
    {/* <LandingPage /> */}
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App () {
  return (
    <div className="app">
      <ToastContainer />
      <div className={(location.pathname === '/register' || location.pathname === '/login') ? 'container' : 'container container-width'}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App
