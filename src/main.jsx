import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import Blogs from './pages/Blogs.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Blog from './pages/Blog.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';
import toast, { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
        
      },
      {
          path: "blogs/:id",
          element:<Blog/>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
          {
            index:true,
            element: <Content></Content>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),

          },
          {
            path:'author',
            element:<Author></Author>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      }

    ],

  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
     <Toaster />
  </StrictMode>,
)
