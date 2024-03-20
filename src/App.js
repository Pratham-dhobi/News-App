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
  
  myStyleLight= {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: '0px',
    height: '40px'
  }
  myStyleDark= {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(215, 215, 215)',
    padding: '0px',
    height: '40px'
  }
  headingStyle = {
    width: '15%',
    color: 'yellow',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  marqueeStyleLight = {
    width: '85%',
    fontSize: '18px',
    color: 'white',
    padding: '0px',
    height: '40px'
  }
  marqueeStyleDark = {
    width: '85%',
    fontSize: '18px',
    color: 'black',
    padding: '0px',
    height: '20px',
    height: '40px'
  }
  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
          <div className="news-container" style={this.state.mode==='light'?this.myStyleLight:this.myStyleDark}>
            <div className="heading" style={this.headingStyle}>
              <span><h5 style={{fontSize: '24px'}}>Breaking News</h5></span>
            </div>
            <div className="news" style={this.state.mode==='light'?this.marqueeStyleLight:this.marqueeStyleDark}>
            <marquee width="100%" direction="left" height="20px" className='my-1'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum enim porro incidunt recusandae eum unde nostrum totam provident voluptates sit! Quibusdam libero sed soluta ipsa aliquam fuga provident quasi? Obcaecati, recusandae soluta! Sapiente exercitationem sint ex odit et, magnam nulla eius, vero perferendis praesentium iure mollitia nam voluptas non tenetur eligendi facilis? Laboriosam dolore unde deserunt at tempore id reiciendis provident ducimus labore ipsa eveniet facere, assumenda, amet, vel culpa recusandae ut itaque maiores quibusdam? Dolores enim minima atque sunt voluptates nostrum vero tempore. Recusandae quasi, soluta vero voluptas repellat, dolor repellendus deleniti totam id ad quos, praesentium accusantium tenetur?</p>
            </marquee>
            </div>
          </div>
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