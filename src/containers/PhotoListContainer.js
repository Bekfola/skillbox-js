import React from "react";
import PhotoList from "../components/PhotoList";
import { setInitPhotos } from '../actions/actions';
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
        loadRandomPhotos: () => dispatch(loadRandomPhotos())
    }
}

const PhotoListContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoList);

export default PhotoListContainer;