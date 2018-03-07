export const RECEIVE_BITCOIN_DATA = 'RECEIVE_BITCOIN_DATA';

export function receiveBitcoinData(data) {
    return {
        type: RECEIVE_BITCOIN_DATA, data
    };
}

export function getBitcoinData(currency){
    return function (dispatch) {

        return fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`)
            .then(response => {return response.json()})
            .then(bitcoinData => { dispatch(receiveBitcoinData(bitcoinData))});
        };
    }


