export const setInitPhotos = (photos) => {
    return {
        type: 'SET_INIT_PHOTOS',
        initPhotos: photos
    }
}

export const setAccessToken = (code) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        accessToken: code
    }
}

export const setBearerToken = (bearerToken) => {
    return {
        type: 'SET_BEARER_TOKEN',
        bearerToken: bearerToken
    }
}

export const getCurrentPhoto = (photoId) => {
    return {
        type: 'GET_CURRENT_PHOTO',
        photoId: photoId
    }
}

export const getLargePhotoUrl = (photoId) => {
    return {
        type: 'GET_LARGE_PHOTO_URL',
        photoId: photoId
    }
}

export const toggleIsLiked = () => {
    return {
        type: 'TOGGLE_IS_LIKED'
    }
}

export const likeCounterPlus = (photoId) => {
    return {
        type: 'LIKE_COUNTER_PLUS',
        photoId: photoId
    }
}

export const likeCounterMinus = (photoId) => {
    return {
        type: 'LIKE_COUNTER_MINUS',
        photoId: photoId
    }
}