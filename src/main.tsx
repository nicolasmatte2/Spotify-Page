import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./menu.css";
import "./tips.css";
import "./boxes.css";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { Tips } from "./pages/Tips/Tips";  
import { Boxes } from "./pages/Boxes/Boxes";
import { Footer } from "./pages/Footer/Footer"; 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home/>
    <Menu/>
    <Tips/>
    <Boxes/>
    <Footer/>
  </React.StrictMode>
);
