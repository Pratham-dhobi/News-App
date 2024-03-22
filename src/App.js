import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Alerts from './components/Alerts';

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
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
          <HeadLine mode={this.state.mode}/>
          <Alerts alert={this.state.alert}/>
          <News mode={this.state.mode}/>
      </>
    )
  }
}