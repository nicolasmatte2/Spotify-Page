import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Layout/Header/Header";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Layout/Footer/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
