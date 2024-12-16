import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './Pages/Register.jsx'; 
import NotFound from './Pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'singleBlog', element: <SingleBlog /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },    
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },      
    ],
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
