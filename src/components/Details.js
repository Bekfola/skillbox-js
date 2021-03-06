import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../style.css';
import Preloader from './common/Preloader';

class Details extends React.Component {
   

    componentDidMount()  {
        
        this.props.getCurrentPhoto(this.props.match.params.photoId);
        this.props.getLargePhotoUrl(this.props.match.params.photoId);
        
    }


    render() {
        return (
            <>
            <div>
                {this.props.isFetching ? <Preloader /> : null}
            </div>
            <div className='dImg'>
                <NavLink to="/">Back</NavLink>
                <div >
                    
                <img src={this.props.state.currentPhotoUrl} id='photo' className={
                    this.props.state.zoomOut ? 'zoom-out' : 'zoom-in'
                }
                onClick={() => this.props.zoomToggle()}>
                </img>
                </div>

                имя автора {this.props.state.currentPhotoUrl ? this.props.state.currentPhoto.user.name : ''} <br />
                и ссылка на его Unsplash-профиль: <br />{this.props.state.currentPhotoUrl ? this.props.state.currentPhoto.user.links.html : ''} <br />
                дата публикации {this.props.state.currentPhotoUrl ? this.props.state.currentPhoto.created_at : ''} <br />
                кол-во лайков {this.props.state.currentPhotoUrl ? this.props.state.currentPhoto.likes : ''}

                <br />
                {this.props.state.isLiked 
                ? <button
                onClick={() => {this.props.unLikePhoto(this.props.match.params.photoId, this.props.state.bearerToken)}}
                >unlike</button> 
                : <button
                onClick={() => {this.props.likePhoto(this.props.match.params.photoId, this.props.state.bearerToken)}}
                >like</button>}
                
                
                
            </div>
            </>
            )
    }
}


export default Details;


                // имя автора {this.props.state.currentPhoto.user.name} <br />
                // и ссылка на его Unsplash-профиль: <br />{this.props.state.currentPhoto.user.links.html} <br />
                // дата публикации {this.props.state.currentPhoto.created_at} <br />
                // кол-во лайков {this.props.state.currentPhoto.likes}