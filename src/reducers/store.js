import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

let initialState = {
    photos: [],
    accessToken: '',
    bearerToken: '',
    currentPhoto: {},
    currentPhotoUrl: '',
    isLiked: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_INIT_PHOTOS':
            return {...state, photos: [...state.photos, ...action.initPhotos]};
        case 'SET_ACCESS_TOKEN':
            return {...state, accessToken: action.accessToken};
        case 'SET_BEARER_TOKEN':
            return {...state, bearerToken: action.bearerToken};
        case 'GET_CURRENT_PHOTO':
            return {...state, currentPhoto: state.photos.find(el => el.id == action.photoId) };
        case 'GET_LARGE_PHOTO_URL':
            let currentPhoto = state.photos.find(el => el.id == action.photoId);
            return {...state, currentPhotoUrl: currentPhoto.urls.full, isLiked: currentPhoto.liked_by_user};
        case 'TOGGLE_IS_LIKED': 
            return {...state, isLiked: !state.isLiked};
        default:
            return state;
    }
}

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware));


export const getInit = (photos) => ({type: GET_INIT, photos})

window.store = store;
export default store;
