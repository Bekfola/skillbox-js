import React from "react";
import PhotoList from "../components/PhotoList";
import { setAccessToken, setBearerToken, setInitPhotos } from '../actions/actions';
import { connect } from "react-redux";
import { loadRandomPhotos } from "../api/api";

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInitPhotos: (photos) => dispatch(setInitPhotos(photos)),
        setAccessToken: (code) => dispatch(setAccessToken(code)),
        loadRandomPhotos: (bearerToken) => dispatch(loadRandomPhotos(bearerToken)),
        setBearerToken: (bearerToken) => dispatch(setBearerToken(bearerToken))
    }
}

const PhotoListContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoList);

export default PhotoListContainer;