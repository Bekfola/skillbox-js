import {Route, Switch} from 'react-router-dom';
import React from 'react';
import PhotoList from './components/PhotoList';
import Auth from './components/Auth';
import PhotoListContainer from './containers/PhotoListContainer';
import '../style.css';
import DetailsContainer from './containers/DetailsContainer';

// import './App.css';




function App(props) {
  
  return (

    <div className='app-wrapper'>
        <Switch>
        <Route path='/auth'>
           <Auth />
        </Route>
        <Route path='/details/:photoId?'>
          <DetailsContainer />
        </Route>
        <Route path='/'>
            <PhotoListContainer />
        </Route>
        </Switch>
    </div>

  );
}



export default App;


// <HeaderConnect />
// <Navbar />
// <div className='app-wrapper-content'>
//   <Route path='/profile/:userId?'
//     render={()=><ProfileContainer />} />
//   <Route path='/dialogs'
//     render={()=><DialogsContainer />}/>
//   <Route path='/news' render={()=><News />}/>
//   <Route path='/music' render={()=><Music />}/>
//   <Route path='/settings' render={()=><Settings />}/>
//   <Route path='/users' render={()=><UsersContainer />} />
//   {/*<Profile />   <Dialogs />*/}
// </div>


// <Route exact path='/auth'
// render={()=><Auth/>} />
// <Route exact path='/details/:photoId?'
// render={()=><DetailsContainer/>} />
// <Route exact path='/'
// render={()=><PhotoListContainer/>} />