import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Alerts from './components/Alerts';
import Business from './components/Business';
import Sports from './components/Sports';
import Technology from './components/Technology';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HeadLine from './components/HeadLine';

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      mode: 'light',
      alert: null
    } 
  }
  
  showAlert = (st, msg) => {
    this.setState({
      alert: {
        st: st,
        msg: msg
      }
    });

    setTimeout(()=>{
      this.setState({
        alert: null
      });
    }, 1500);
  }
  
  toggleMode = () => {
    if(this.state.mode === 'light') {
      this.setState({
        mode: 'dark' 
      });
      document.body.style.backgroundColor = '#02071e';
      document.body.style.color = 'white';
      this.showAlert('success', 'dark theme enabled.');
    }else {
      this.setState({
        mode: 'light' 
      });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      this.showAlert('success', 'light theme enabled.');
    }
  } 
  
  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
          <HeadLine mode={this.state.mode}/>
          <Alerts alert={this.state.alert}/>

          <Routes> 
            <Route path='/' element={<News mode={this.state.mode}/>}/>
          </Routes>

          <Routes> 
            <Route path='/business' element={<Business/>}/>
          </Routes>

          <Routes> 
            <Route path='/sports' element={<Sports/>}/>
          </Routes>

          <Routes> 
            <Route path='/technology' element={<Technology/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}