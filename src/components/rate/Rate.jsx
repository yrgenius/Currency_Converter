import React from "react";
import Calculator from '../calculator/Calculator';
import "./Rate.css";

export default class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyRate: {},
        };
        this.getRate();
    }

    getRate() {
        const url = "https://openexchangerates.org/api/latest.json?app_id=";
        const apiKey = "7955d9e713214a36863e9d6c2189a041";
        // const baseCurrency = 'USD'
        // const base = `&base=${baseCurrency}`;
        // const currency = ["RUB", "EUR"];
        // const country = `&symbols=${currency}`;

        fetch(url + apiKey)
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    currencyRate: {
                        rub: data.rates["RUB"].toFixed(2),
                        eur: data.rates["EUR"].toFixed(2),
                    },
                });
            });
    }

    getLocalDate(date) {
        let month = [
            "января",
            "февраля",
            "марта",
            "апреля",
            "мая",
            "июня",
            "июля",
            "августа",
            "сентября",
            "октября",
            "ноября",
            "декабря",
        ];

        return `${date.getDate()} ${
            month[date.getMonth()]
        } ${date.getFullYear()}`;
    }

    render() {
        return (
            <>
                <div className="rate">
                    <h2 className="rate__title">{`Курсы валют на ${this.getLocalDate(
                        new Date()
                    )}`}</h2>
                    <div className="wrapper">
                        <div className="rate__item">
                            <p className="rate__item-title">USD</p>
                            <p className="rate__item-text">{`${this.state.currencyRate.rub} RUB`}</p>
                        </div>
                        <div className="rate__item">
                            <div className="rate__item-title">EUR</div>
                            <div className="rate__item-text">{`${(
                                this.state.currencyRate.rub /
                                this.state.currencyRate.eur
                            ).toFixed(2)} RUB`}</div>
                        </div>
                        <div className="rate__item">
                            <div className="rate__item-title">BTC</div>
                            <div className="rate__item-text">23000 USD</div>
                        </div>
                    </div>
                </div>
                <Calculator  rate={this.state.currencyRate}/>
            </>
        );
    }
}
