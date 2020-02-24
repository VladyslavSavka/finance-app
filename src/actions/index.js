const currencyChosen = (val) => {
    return {
        type: 'CURRENCY_CHOSEN',
        payload: val
    };
};

const dayChosen = (days) => {
    return {
        type: "DAY_CHOSEN",
        payload: days
    }
};

const currencyLoaded = (currency) => {
    return {
        type: 'CURRENCY_LOADED',
        payload: currency
    }
};

const amountChanged = (label) => {
    return {
        type: 'AMOUNT_CHANGED',
        payload: label
    };
};

export {
    currencyChosen,
    dayChosen,
    currencyLoaded,
    amountChanged
};