import React, { Component } from 'react';
import ListItem from '../list-item';
import {connect} from 'react-redux';
import {currencyLoaded} from '../../actions';

import './list.css';

class List extends Component {

    componentDidUpdate(prevProps){
        if(this.props.currency !== prevProps.currency || this.props.days !== prevProps.days ){
            const {currency} = this.props;
            const {days} = this.props;

            const fetchCurrency = () => {
                
                const urls = days.map((day) => {
                    return (
                        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${day}&json`
                    )
                });

                const requests = urls.map(url => fetch(url));

                if (urls.length>0 && currency !== null){
                    Promise.all(requests)
                    .then(responses => Promise.all(responses.map(r => r.json())))
                    .then(curs => this.props.currencyLoaded(curs))
                } else {
                    this.props.currencyLoaded([]);
                }
            
            }
            fetchCurrency();
        }
    }
    
    render(){
        const {showBlock} = this.props;
        const {amount} = this.props;
        
        return (
            <div>
                <ul className="list mt-5">
                {
                    showBlock.map((point) => {
                        return (
                            <li key={point[0].rate}><ListItem point={point} amount={amount}/></li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({currency, days, showBlock, amount}) => {
    return {currency, days, showBlock, amount};
};

const mapDispatchToProps = {
    currencyLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

