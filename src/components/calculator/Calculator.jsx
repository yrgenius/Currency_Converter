import React from "react";
import "./Calculator.css";

export default class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'RUB': this.props.rate.rub,
            'EUR': this.props.rate.eur,
        }
    }

    calcRate = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <div className="calc">
                <h2 className="calc__title">Калькулятор обмена</h2>
                <div className="calc__wrapper">
                    <h3 className="calc__subtitle">USD</h3>
                    <div className="calc__number">
                        <input type="number" defaultValue={100} />
                        <select name="select_currency" id="" >
                            {
                                Object.keys((this.props.rate)).map((keyName, ind) => (
                                    <option 
                                        key={keyName} 
                                        value={keyName}
                                        onClick={(e) => this.calcRate(e)}> 
                                        {keyName.toUpperCase()}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="calc__out">
                        <h4>Результат</h4>
                        <ul>
                            <li>{`${(this.props.rate.rub)} RUB`}</li>
                            <li>{`${(this.props.rate.eur)} EUR`}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
