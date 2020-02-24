import React from 'react';
import Currency from '../currency';
import Days from '../days';
import List from '../list';
import AddAmount from '../add-amount';

import './app.css';

const App = () =>  {
    return (
        <div className="container app my-5">
            <div className="row">
                <div className="col-sm-8 col-12 mb-2">
                    <Currency/>
                </div>
                <div className="col-12 col-sm-4 mt-2">
                    <AddAmount/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 text-left">
                    <Days/>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default App;