import React from 'react';
import {NavLink} from 'react-router-dom';
import Unsplash, {toJson} from 'unsplash-js';

class PhotoList extends React.Component {
    myref;
    observer;

    constructor() {
        super();
        this.myref = React.createRef();
        // this.code = location.search.split('code=')[1];
        

        // let options = {
        //     root: null,
        //     rootMargin: '0px',
        //     threshold: 1
        // };
        // this.observer = new IntersectionObserver(
        //     //this.props.loadRandomPhotos,
        //     () => {alert('hi')},
        //     options
        // ); 

        this.observer = new IntersectionObserver(enteries => {
            let ratio = enteries[0].intersectionRatio;
            console.log('ratio' + ratio);
            console.log(this.props.state.bearerToken)
            if (ratio > 0) this.props.loadRandomPhotos(this.props.state.bearerToken);
        });
    }

    componentDidMount()  {

        const code = location.search.split('code=')[1];
        if(code) {
            this.props.setAccessToken(code)
        }

        if (!this.props.state.photos[0]) { 
            this.props.loadRandomPhotos(this.props.state.bearerToken);
        }

        
        

        // const code = location.search.split('code=')[1];
        // if (code) {
        //     const unsplash = new Unsplash({
        //         accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
        //         secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
        //         callbackUrl: "http://localhost:8080"
        //        });
         
        //  unsplash.auth.userAuthentication(code)
        //  .then(res => res.json())
        //     .then(json =>
        //     {console.log(json)})
        // }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.observer.observe(this.myref.current);
        }, 200);
        
    }

    componentWillUnmount() {
        delete localStorage.page;
        this.observer.disconnect();
    }
    

    render() {
        return (
            <div>
                <div>Hello World</div>
                <div><NavLink to="/auth">Авторизоваться</NavLink></div>
                <p></p>


                <div className='list'>{(this.props.state.photos[0]) ? 
                (
                this.props.state.photos.map(photo => {
                    return(
                        <div className='imgBlockInList'>
                            <NavLink to={'/details/' + photo.id}>
                                <img src={photo.urls.small} />
                            </NavLink>
                            <br />
                            имя автора {photo.user.name} <br />
                            и ссылка на его Unsplash-профиль: <br />{photo.user.links.html} <br />
                            дата публикации {photo.created_at} <br />
                            кол-во лайков {photo.likes}
                        </div>
                    )
                })
                
                )
                : 'Авторизуйтесь для просмотра фото'}</div>

                <div className='loadMore'>
                    {(this.props.state.photos[0]) ?
                    <button
                        onClick={this.props.loadRandomPhotos}
                        ref={this.myref}
                    >ok</button>
                    : ''
                    }
                </div>

            </div>
            )
    }
}


export default PhotoList;


//{(this.props.state.photos[0]) ? 