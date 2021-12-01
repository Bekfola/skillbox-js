import {Route} from 'react-router-dom';
import React from 'react';
import PhotoList from './components/PhotoList';
import Auth from './components/Auth';
import PhotoListContainer from './containers/PhotoListContainer';
import '../style.css';


// import './App.css';




function App(props) {
  console.log(props.store);
  return (

    <div className='app-wrapper'>
        
        <Route exact path='/auth'
            render={()=><Auth/>} />
        <Route exact path='/'
        render={()=><PhotoListContainer/>} />
                
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