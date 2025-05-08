import { createBrowserRouter, Outlet, Router } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import LandingsPagina from "./Pages/LandingsPagina";
import Home from "./Pages/Home";
import About from "Pages/About";
import MakingOf from "Pages/MakingOf";
import Footer from "components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/making-of/:id",
        element: <MakingOf />,
      },
    ],
  },
  {
    path: "/sprookje",
    element: <LandingsPagina />,
  },
]);

export default router;
