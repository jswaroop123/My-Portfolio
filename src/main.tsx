import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router";
import Attributions from "./components/footer/pages/Attributions";
import ShoutOuts from "./components/footer/pages/ShoutOuts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="/shout-outs" element={<ShoutOuts />} />
    </Routes>
  </BrowserRouter>
);