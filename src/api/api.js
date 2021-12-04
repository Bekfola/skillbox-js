import Unsplash, {toJson} from 'unsplash-js';
import { setBearerToken, setInitPhotos, toggleIsLiked } from '../actions/actions';

export const loadRandomPhotos = (bearerToken) => {

    return (dispatch) => {
        const code = location.search.split('code=')[1];
        if (code) {
            const unsplash = new Unsplash({
                accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
                secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
                callbackUrl: "http://localhost:8080"
            });
            
        let page = (localStorage.getItem('page')) ? (localStorage.getItem('page')) : 1

        console.log('bearerToken = ');
        console.log(bearerToken);

        if (!bearerToken) {
            unsplash.auth.userAuthentication(code)
                .then(toJson)
                .then(json =>
                {
                    unsplash.auth.setBearerToken(json.access_token);
                    dispatch(setBearerToken(json.access_token));
                 
                    unsplash.photos.listPhotos(page)
                    .then(toJson)
                    .then(json => {
                        dispatch(setInitPhotos(json))
                        localStorage.setItem('page', ++page)
                        console.log(json)       
                    })
            });
        }
        else {
            unsplash.auth.setBearerToken(bearerToken);

            unsplash.photos.listPhotos(page)
                .then(toJson)
                .then(json => {
                    dispatch(setInitPhotos(json))
                    localStorage.setItem('page', ++page)
                    console.log(json)       
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
            callbackUrl: "http://localhost:8080",
            bearerToken: bearerToken
        });
        
        console.log('into likePhoto check bearerToken')
        console.log(bearerToken)

            unsplash.photos.likePhoto(photoId)
            .then(toJson)
            .then(json => {
                console.log('ответ на like:')
                console.log(json)
                if (json.photo.liked_by_user) {
                    dispatch(toggleIsLiked())
                }
            });
    }
}


export const unLikePhoto = (photoId, bearerToken) => {
    return (dispatch) => {
        const unsplash = new Unsplash({
            accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
            secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
            callbackUrl: "http://localhost:8080",
            bearerToken: bearerToken
        });
        

            unsplash.photos.unlikePhoto(photoId)
            .then(toJson)
            .then(json => {
                console.log('ответ на UNlike:')
                console.log(json)
                if (!json.photo.liked_by_user) {
                    dispatch(toggleIsLiked())
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