import React from 'react';
import {connect} from 'react-redux';
import {amountChanged} from '../../actions';

const AddAmount = ({amount, amountChanged}) => {
    const onChange = (e) => {
        if(e.target.value.length < 8){
            amountChanged(e.target.value);
        }
    }

    return (
        <div>
            <label htmlFor="amount"></label>
            <input type="number" id="amount" maxLength="6" className="mw-100"
                placeholder="Amount..." value={amount} 
                onChange={onChange}></input>
        </div>
    )
}

const mapStateToProps = ({amount}) => {
    return {amount};
}

const mapDispatchProps = {
    amountChanged
}

export default connect(mapStateToProps, mapDispatchProps)(AddAmount);