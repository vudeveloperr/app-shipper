import { LOGGED } from '../actions/login/action_types';

export default (state = {
    login: false,
}, action) => {
    switch (action.type) {
        case LOGGED:
            return {
                ...state,
                login: action.data,
            };
        default:
            return {
                ...state,
            };
    }
};