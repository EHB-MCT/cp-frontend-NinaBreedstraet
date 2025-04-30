import React from "react";
import Home from "./Pages/Home"
import Navigation from "components/Navigation/Navigation";
import { RouterProvider } from "react-router";
import router from "router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
