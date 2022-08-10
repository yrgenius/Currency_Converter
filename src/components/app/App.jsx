import React from "react";
import Calculator from "../calculator/Calculator";
import Rate from "../rate/Rate";

import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <main className="content container">
                <Rate />
                <Calculator />
            </main>
        );
    }
}
