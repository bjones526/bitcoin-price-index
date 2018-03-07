import {RECEIVE_BITCOIN_DATA} from './actions';
import {combineReducers} from 'redux';

function bitcoin (state = {
    bitcoinData: {}
}, action ) {
    switch(action.type) {
    case RECEIVE_BITCOIN_DATA:
        return Object.assign({}, state,
            {
                bitcoinData: action.data,
            });
    default: // need this for default case
       return state
    }
}

const rootReducer = combineReducers({
    bitcoin
});

export default rootReducer;