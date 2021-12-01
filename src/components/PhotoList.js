import React from 'react';
import {NavLink} from 'react-router-dom';

class PhotoList extends React.Component {
    myref;
    observer;

    constructor() {
        super();
        this.myref = React.createRef();
        this.code = location.search.split('code=')[1];
        

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
            if (ratio > 0) this.props.loadRandomPhotos();
        });
    }

    componentDidMount()  {
        this.props.loadRandomPhotos();

    }

    componentDidUpdate() {
        setTimeout(() => {
            this.observer.observe(this.myref.current);
        }, 3000);
        
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
                        <div>
                            <img src={photo.urls.small} />
                        </div>
                    )
                })
                
                )
                : 'Авторизуйтесь для просмотра фото'}</div>

                <div className='loadMore'>
                    {(this.code) ?
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