import React from 'react';
import {NavLink} from 'react-router-dom';
import { likePhoto, unLikePhoto } from '../api/api';
import Unsplash, {toJson} from 'unsplash-js';
class Details extends React.Component {
   

    componentDidMount()  {
        
        console.log(this.props.match.params.photoId);
        
        this.props.getLargePhotoUrl(this.props.match.params.photoId);


        // const unsplash = new Unsplash({
        //     accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
        //     secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
        //     callbackUrl: "http://localhost:8080"
        // });
     
        

        // unsplash.photos.getPhoto('bbgIJD05bu4')
        //     .then(toJson)
        //     .then(json => {
        //         console.log(json)
        //     });
    }

    

    render() {
        return (
            <div className='dImg'>
                <img src={this.props.state.currentPhotoUrl}>
                </img>
                <br />
                {this.props.state.isLiked 
                ? <button
                onClick={() => {this.props.unLikePhoto(this.props.match.params.photoId, this.props.state.bearerToken)}}
                >unlike</button> 
                : <button
                onClick={() => {this.props.likePhoto(this.props.match.params.photoId, this.props.state.bearerToken)}}
                >like</button>}
                
                
            </div>
            )
    }
}


export default Details;