import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>
);
