import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import { BrowserRouter , Route, Link} from 'react-router-dom'
import moon from './moon.png'
//import component
import About from'./About' 
import Inspiration from './Inspiration' 
import Research from './Research'


class App extends Component {
  render() {
    return(
      <div>
      <BrowserRouter>
      <div>
      <div className="redbg">
      <img src={moon} className="App-logo center"/>
      <h1 className="title is-2 redtext">Belle's project</h1>
      </div>
      
      <div className="tabs is-centered">
  <ul>
    <li className="is-active">
      <Link to="/">
        About
      </Link>
    </li>
    
    <li>
      <Link to="/Inspiration">
        <span>Inspiration</span>
      </Link>
    </li>
    
    <li>
      <Link to="/Research">
        <span>Research</span>
      </Link>
    </li>
  
  </ul>
</div>
        <Route component={About} path="/" exact/>
        <Route component={Inspiration} path="/Inspiration" />
        <Route component={Research} path="/Research" />
              
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;