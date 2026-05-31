import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LightgalleryProvider>
    <App />
  </LightgalleryProvider>
);
