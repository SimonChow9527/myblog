import React, { Component } from 'react'
import HomePage from './components/HomePage';
import MyNavbar from './components/MyNavBar';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as dotenv from 'dotenv';

dotenv.config();


 class App extends Component {
  
  constructor(props){
    super(props);
    this.CheckMobile=this.CheckMobile.bind(this);
  
    this.state={
      isMobile:'',
    }

  }

  CheckMobile() {
    let isMobile=(window.screen.width <parseInt(process.env.REACT_APP_MOBILE_WIDTH));
    this.setState({
      isMobile:isMobile
    },()=>{})
}

  componentDidMount() {
    window.addEventListener('resize', this.CheckMobile);
    this.CheckMobile();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.CheckMobile);
  }




  render() {
    return (
      <div className='App'>
                <Router>
                  <div className='nav-bar'>
                   <MyNavbar isMobile={this.state.isMobile}/>  
                   </div>
                   <div className='content'> 
                   <Switch>
                        <Route exact path="/" component={HomePage} /> 
                        <Route path="/home" component={HomePage} />
                        <Route path="/blogs" component={Blogs} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route component={PageNotFound} />
                     </Switch>
                     </div> 
                </Router>              
            </div>
    )
  }
}

export default App;