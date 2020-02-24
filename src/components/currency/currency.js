import React from 'react';
import {connect} from 'react-redux';
import {currencyChosen} from '../../actions';

const Currency = ({currencyChosen , currency}) => {

    const check = () => {
        const inp = document.getElementsByName('currency');

        for (let i=0; i<inp.length; i++){
            if(inp[i].checked){
                currencyChosen(inp[i].id);
            }
        }
    };

    return (
        <div className="container d-flex justify-content-between">
            <div className="custom-control custom-radio">
                <input type='radio' className="custom-control-input" name="currency" id="USD" onChange={check}></input>
                <label htmlFor="USD" className="custom-control-label">USD</label>
            </div>
            <div className="custom-control custom-radio">
                <input type='radio' className="custom-control-input" name="currency" id="EUR" onChange={check}></input>
                <label htmlFor="EUR" className="custom-control-label">EUR</label>
            </div>
            <div className="custom-control custom-radio">
                <input type='radio' className="custom-control-input" name="currency" id="GBP" onChange={check}></input>
                <label htmlFor="GBP" className="custom-control-label">GBP</label>
            </div>
            <div className="custom-control custom-radio">
                <input type='radio' className="custom-control-input" name="currency" id="PLN" onChange={check}></input>
                <label htmlFor="PLN" className="custom-control-label">PLN</label>
            </div>
        </div>
    )
};

const mapStateToProps = ({currency}) => {
    return {currency};
}

const mapDispatchToProps = {
    currencyChosen
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency);