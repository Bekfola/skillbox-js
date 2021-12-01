import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

let initialState = {
    photos: [],
    partyNum: 1
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_INIT_PHOTOS':
            return {...state, photos: [...state.photos, ...action.initPhotos]};
        default:
            return state;
    }
}

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware));


export const getInit = (photos) => ({type: GET_INIT, photos})

window.store = store;
export default store;
