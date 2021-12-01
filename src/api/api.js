import Unsplash, {toJson} from 'unsplash-js';
import { setInitPhotos } from '../actions/actions';

export const loadRandomPhotos = () => {

    return (dispatch) => {
        const code = location.search.split('code=')[1];
        if (code) {
            const unsplash = new Unsplash({
                accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
                secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
                callbackUrl: "http://localhost:8080"
            });
            const authenticationUrl = unsplash.auth.getAuthenticationUrl([
                "public",
                "write_likes"
            ]);
            
            let page = (localStorage.getItem('page')) ? (localStorage.getItem('page')) : 1

            unsplash.photos.listPhotos(page)
                .then(toJson)
                .then(json => {
                    dispatch(setInitPhotos(json))
                    localStorage.setItem('page', ++page)
                    console.log(json)       
                })
            
            };
    }
}