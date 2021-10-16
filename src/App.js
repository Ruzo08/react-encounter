import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import Defaults from './components/Defaults';
import Contact from './components/Contact';
import Galeri from './components/Galeri';
import Partner from './components/Partner';
import Carousel from './components/Carousel';
import Details from './components/Details';
import Modal from './components/Modal';
import Cart from './components/Cart';
import FAQ from './components/FAQ';
import Content from './components/Content';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Carousel/>
      <Switch>
          <Route exact path="/" component={CourseList}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/galeri" component={Galeri}/>
          <Route exact path="/our-partner" component={Partner}/>
          <Route exact path="/details" component={Details}/>
          <Route exact path="/cart" component={Cart}/>
          <Route component={Defaults}/>
      </Switch>
      <Modal/>
      <Content/>
      <FAQ/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
