import React, { Component } from 'react'
import BlogBase from './components/BlogBase';
import Navbar from './components/NavBar';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


const App = () => {

  return (
      <div>
                <Router>
                   <Navbar/>    
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
  
  );
};

export default App;