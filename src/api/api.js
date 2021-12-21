import Unsplash, {toJson} from 'unsplash-js';
import { setBearerToken, setInitPhotos, toggleIsLiked, likeCounterPlus, likeCounterMinus } from '../actions/actions';

export const loadRandomPhotos = (bearerToken) => {
    if (localStorage.getItem('bearerToken')) {
        bearerToken = localStorage.getItem('bearerToken');
    };
    return (dispatch) => {
        const code = location.search.split('code=')[1];
        if (code) {
            const unsplash = new Unsplash({
                accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
                secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
                callbackUrl: "https://bekfola.github.io/skillbox-js"
            });
            
        let page = (localStorage.getItem('page')) ? (localStorage.getItem('page')) : 1

            if (!bearerToken) {
                unsplash.auth.userAuthentication(code)
                    .then(toJson)
                    .then(json =>
                    {
                        unsplash.auth.setBearerToken(json.access_token);
                        dispatch(setBearerToken(json.access_token));
                        console.log(json.access_token);
                        localStorage.setItem('bearerToken', json.access_token);

                        unsplash.photos.listPhotos(page)
                        .then(toJson)
                        .then(json => {
                            dispatch(setInitPhotos(json))
                            localStorage.setItem('page', ++page) 
                        })
                });
            }
            else {
                localStorage.setItem('bearerToken', bearerToken);

                unsplash.auth.setBearerToken(bearerToken);

                unsplash.photos.listPhotos(page)
                    .then(toJson)
                    .then(json => {
                        dispatch(setInitPhotos(json))
                        localStorage.setItem('page', ++page)     
                    })
            }
        

        };
    }
}

export const likePhoto = (photoId, bearerToken) => {
    return (dispatch) => {
        const unsplash = new Unsplash({
            accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
            secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
            callbackUrl: "https://bekfola.github.io/skillbox-js",
            bearerToken: bearerToken
        });

            unsplash.photos.likePhoto(photoId)
            .then(toJson)
            .then(json => {
                if (json.photo.liked_by_user) {
                    dispatch(toggleIsLiked());
                    dispatch(likeCounterPlus(photoId));
                }
            });
    }
}


export const unLikePhoto = (photoId, bearerToken) => {
    return (dispatch) => {
        const unsplash = new Unsplash({
            accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
            secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
            callbackUrl: "https://bekfola.github.io/skillbox-js",
            bearerToken: bearerToken
        });
        

            unsplash.photos.unlikePhoto(photoId)
            .then(toJson)
            .then(json => {
                if (!json.photo.liked_by_user) {
                    dispatch(toggleIsLiked());
                    dispatch(likeCounterMinus(photoId));
                }
            });
    }
}


// export const loadPhotoById = (photoId) => {

//     return (dispatch) => {
        
//             const unsplash = new Unsplash({
//                 accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
//                 secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
//                 callbackUrl: "http://localhost:8080"
//             });
            

//             unsplash.photos.getPhoto(photoId)
//                 .then(toJson)
//                 .then(json => {
//                     console.log(json)
//                 });
            
            
//     }
// }