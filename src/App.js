import React, { Component } from 'react'
import BlogBase from './components/BlogBase';
import Navbar from './components/NavBar';
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
                   <Navbar isMobile={this.state.isMobile}/>    
                   <Switch>
                        <Route exact path="/" component={BlogBase} /> 
                        <Route path="/home" component={BlogBase} />
                        <Route path="/blogs" component={Blogs} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route component={PageNotFound} />
                     </Switch>
                </Router>              
            </div>
    )
  }
}

export default App;