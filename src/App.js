
import './App.css';
import React from 'react';
import ItemList from './Components/ItemList/ItemList';
import Navbar from './Components/Navbar/Navbar';
import Jobs from './Components/Jobs/Jobs';
import About from './Components/About/About';
import ItemDetails from './Components/ItemDetails/ItemDetails';
//import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import {Redirect, Route,Switch} from 'react-router-dom';


//Routing : 
// we use <a> tag in html to route but here we will not use <a> tag in react.
function App(){
    return(
      <div className="App">
        <Navbar/>
        <Switch>
           {/* <Route path='/' exact component={Home} /> */}
        <Route path='/home' exact component={ItemList} />
        <Route path='/about' exact component={About} />
        <Route path='/blog'exact component={Blog} />
        <Route path='/jobs' exact component={Jobs} />
        <Route path='/courses' exact component={ItemList} />
        <Route path='/courses/:id' exact component={ItemDetails} />
        {/* Dynamic id  */}
        <Redirect from='/' exact to='/home'/>
        <Redirect to='/error'/>
        </Switch>
       
        
      </div>
    )
  }

export default App;
