import React from "react";
import "./Calculator.css";

export default class Calculator extends React.Component {
    render() {
        return (
            <div className="calc">
                <h2 className="calc__title">Калькулятор обмена</h2>
                <div className="calc__wrapper">
                    <p className="calc__subtitle">USD</p>
                    <ul>
                        <li className="calc__item">
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="radio"
                                    defaultValue={0}
                                />{" "}
                                Купить
                            </label>
                        </li>
                        <li className="calc__item">
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="radio"
                                    defaultValue={1}
                                />{" "}
                                Продать
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
