import React from "react";
import "./Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <h1 className="header__title">Currency Converter</h1>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">Главная</li>
                            <li className="header__item">Пункты обмена</li>
                            <li className="header__item">Контакты</li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        )
    }
}
