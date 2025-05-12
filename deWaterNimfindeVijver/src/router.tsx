import { createBrowserRouter, Outlet } from "react-router-dom";
import Navigation from "./components/PortaalComponents/Navigation/Navigation";
import LandingsPagina from "./Pages/LandingsPagina";
import Home from "./Pages/Home";
import About from "Pages/About";
import MakingOf from "Pages/MakingOf";
import MakingOfMeer from "Pages/MakingOfMeer";
import Footer from "components/PortaalComponents/Footer/Footer";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/making-of/:id",
        element: <MakingOf />,
      },
      {
        path: "/making-of-meer/:id",
        element: <MakingOfMeer />,
      },
    ],
  },
  {
    path: "/sprookje",
    element: <LandingsPagina />,
  },
]);

export default router;
