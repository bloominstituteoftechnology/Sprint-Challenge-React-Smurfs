import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';

const rootReducer = combineReducers({
  smurfs
});

const smurfsReducer = (smurfs = [], action) => {
    switch(action.type) {
        case smurfs:
            return action.payload.data;
        default:
            return smurfs;
    }
};

export default rootReducer;