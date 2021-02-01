import { FETCH_SURVEYS } from '../actions/types';

// by default, our survey array will be empty
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}