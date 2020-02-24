import React from 'react';

import './list-item.css';

const ListItem = ({point, amount}) => {
    const {rate , exchangedate: date} = point[0];
    const uah = Math.round((amount*rate)*100)/100;

    return (
        <div className="list-item">
            <div>Rate: {rate}</div>
            <div>Date: {date}</div>
            <div>{uah} UAH</div>
        </div>
    )
}

export default ListItem;