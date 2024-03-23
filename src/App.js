import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Alerts from './components/Alerts';
import HeadLine from './components/HeadLine';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

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
          <header className='position-sticky z-1 top-0'>
            <HeadLine mode={this.state.mode}/>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
          </header>
            <Alerts alert={this.state.alert}/>

            <Routes>
              <Route path='/' element={<News mode={this.state.mode} pageSize={6} country='in' category='general'/>}/>
            </Routes>
            
            <Routes>
              <Route path='/entertainment' element={<News mode={this.state.mode} pageSize={6} country='in' category='entertainment'/>}/>
            </Routes>
            
            <Routes>
              <Route path='/sports' element={<News mode={this.state.mode} pageSize={6} country='in' category='sports'/>}/>
            </Routes>

            <Routes>
              <Route path='/business' element={<News mode={this.state.mode} pageSize={6} country='in' category='business'/>}/>
            </Routes>
            
            <Routes>
              <Route path='/technology' element={<News mode={this.state.mode} pageSize={6} country='in' category='technology'/>}/>
            </Routes>
            
            <Routes>
              <Route path='/science' element={<News mode={this.state.mode} pageSize={6} country='in' category='science'/>}/>
            </Routes>
            
            <Routes>
              <Route path='/health' element={<News mode={this.state.mode} pageSize={6} country='in' category='health'/>}/>
            </Routes>

            {/* <Routes>
              <Route path='/health' element={<News mode={this.state.mode} pageSize={6} country='in' category='health'/>}/>
            </Routes> */}
          </Router>
          
      </>
    )
  }
}