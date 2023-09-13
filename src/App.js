import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Banner } from './components/Banner';
import {Skills} from './components/Skills'
import { Project } from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";

import { Contact } from './components/Contact';
import {Footer} from './components/Footer'
import {About} from './components/About'


function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner/>
        <Skills/>
        <Project/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
