import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import Projects from "../components/Pages/Projects";
import Blog from "../components/Pages/Blog";
import Contect from "../components/Pages/Contect";
import Resume from "../components/Pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <Projects></Projects>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contect",
        element: <Contect></Contect>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
    ],
  },
]);
export default router;
