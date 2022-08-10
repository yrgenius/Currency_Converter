import React from "react";
import "./Calculator.css";

export default class Calculator extends React.Component {
    render() {
        return (
            <div className="calc">
                <h2 className="calc__title">Калькулятор обмена</h2>
                <div className="calc__wrapper">
                    <p className="calc__subtitle">USD</p>
                    <ul className="calc__choice">
                        <li className="calc__item">
                            <label htmlFor="">
                                <input
                                    className="calc__radio-input"
                                    type="radio"
                                    name="radio"
                                    defaultValue={0}
                                    checked
                                />{" "}
                                Купить
                            </label>
                        </li>
                        <li className="calc__item">
                            <label htmlFor="">
                                <input
                                    className="calc__radio-input"
                                    type="radio"
                                    name="radio"
                                    defaultValue={1}
                                />{" "}
                                Продать
                            </label>
                        </li>
                    </ul>
                    <div className="calc__number">
                        <input type="number" defaultValue={100} />
                        <select name="" id="">
                            <option value="USD">USD</option>
                            <option value="RUB">RUB</option>
                            <option value="BTC">BTC</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <div className="calc__out">
                        <h4>Результат</h4>
                        <ul>
                            <li>EUR 150</li>
                            <li>EUR 150</li>
                            <li>EUR 150</li>
                            <li>EUR 150</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
