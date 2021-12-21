import React from "react";
import Details from "../components/Details";
import { getLargePhotoUrl, setAccessToken, setInitPhotos, getCurrentPhoto } from '../actions/actions';
import { connect } from "react-redux";
import { loadRandomPhotos, likePhoto, unLikePhoto } from "../api/api";
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInitPhotos: (photos) => dispatch(setInitPhotos(photos)),
        setAccessToken: (code) => dispatch(setAccessToken(code)),
        // loadRandomPhotos: (bearerToken) => dispatch(loadRandomPhotos(bearerToken)),
        getCurrentPhoto: (photoId) => dispatch(getCurrentPhoto(photoId)),
        getLargePhotoUrl: (photoId) => dispatch(getLargePhotoUrl(photoId)),
        likePhoto: (photoId, bearerToken) => dispatch(likePhoto(photoId, bearerToken)),
        unLikePhoto: (photoId, bearerToken) => dispatch(unLikePhoto(photoId, bearerToken)),
        zoomToggle: () => dispatch(zoomToggle())
    }
}

const withRouterDetailsContainer = withRouter(Details)

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterDetailsContainer);

export default DetailsContainer;