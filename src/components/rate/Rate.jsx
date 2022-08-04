import React from 'react';
import './Rate.css';

export default class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            month: '',
            year: '',
            currencyRate: {},
        }
        this.base = 'USD';
        this.currency = ['RUB', 'EUR'];
        this.getRate();
    }
    
    getRate(){
        const apiKey = '7955d9e713214a36863e9d6c2189a041';
        const url = 'https://openexchangerates.org/api/latest.json?app_id=';
        // const base = `&base=${this.base}`;
        // const country = `&symbols=${this.currency}`;
        let now = '';

        fetch(url + apiKey)
            .then(data => (data.json()))
            .then(data => {
                console.log(data);
                now = new Date(data.timestamp); 
                
                this.setState({
                    date: now.getDate(),
                    month: now.getMonth(),
                    year: now.getFullYear(),
                    currencyRate: {
                        rub: (data.rates['RUB']).toFixed(2),
                        eur: (data.rates['EUR']).toFixed(2),
                    },
                });
            }
            );
    }
    render() {
        return (
            <div className="rate">
                <h2 className="rate__title">{`Курсы валют на ${this.state.date} ${this.state.month} ${this.state.year}`}</h2>
                <div className="wrapper">
                    <div className="rate__item">
                        <p className="rate__item-title">USD</p>
                        <p className="rate__item-text">{`${this.state.currencyRate.rub} RUB`}</p>
                        <p className="rate__item-text">{`${this.state.currencyRate.eur} EUR`}</p>
                    </div>
                    <div className="rate__item">
                        <div className="rate__item-title">BTC</div>
                        <div className="rate__item-text">1500 кг</div>
                        <div className="rate__item-text">3000 kg</div>
                    </div>
                    <div className="rate__item">
                        <div className="rate__item-title">USD</div>
                        <div className="rate__item-text">1500 кг</div>
                        <div className="rate__item-text">3000 kg</div>
                    </div>
                </div>
            </div>
        );
    }
}