const initialState = {
    currency: null,
    days: [],
    showBlock: [],
    amount: ''
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CURRENCY_CHOSEN':
            return {
                ...state,
                currency: action.payload
            }
        case 'DAY_CHOSEN':
            return {
                ...state,
                days: action.payload
            }
        case 'CURRENCY_LOADED':
            return {
                ...state,
                showBlock: action.payload
            }
        case 'AMOUNT_CHANGED':
            return {
                ...state,
                amount: action.payload
            }
        default:
            return state;
    }
}

export default reducer;