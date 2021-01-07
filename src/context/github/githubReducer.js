import {SEARCH_USERS, GET_USER, SET_LOADING, CLEAR_USER} from '../types';


export default(state,action) => {
    switch(action.type) {

        case GET_USER:
            return{
                ...state,
                userdetails: action.payload,
                loading: false
            };

        case CLEAR_USER:
            return{
                ...state,
                users:[],
                loading:false
            };

        case SEARCH_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false,

            };

        case SET_LOADING:
        return{
            ...state,
            loading:true
        };
        
        default:
            return state
    }
}