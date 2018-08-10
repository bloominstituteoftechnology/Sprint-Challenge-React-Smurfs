import React, { Component } from 'react';
import './Home.css';

import smurfsLogo from './img/smurfs_logo.png';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home-container">
        <div className="logo-container">
          <img src={smurfsLogo} alt="Logo" className="logo"/>
        </div>
        
        <p>
          The Smurfs (French: Les Schtroumpfs; Dutch: De Smurfen) is a Belgian comic franchise centered on a fictional colony of small, blue, human-like creatures who live in mushroom-shaped houses in the forest. The Smurfs was first created and introduced as a series of comic characters by the Belgian comics artist Peyo (the pen name of Pierre Culliford) in 1958, wherein they were known as Les Schtroumpfs. There are more than 100 Smurf characters, and their names are based on adjectives that emphasise their characteristics, such as "Jokey Smurf", who likes to play practical jokes on his fellow smurfs. "Smurfette" was the first female Smurf to be introduced in the series. The Smurfs wear Phrygian caps, which came to represent freedom during the modern era.<br/><br/>
          The word “smurf” is the original Dutch translation of the French "schtroumpf", which, according to Peyo, is a word he invented during a meal with fellow cartoonist André Franquin when he could not remember the word salt.<br/><br/>
          The Smurfs franchise began as a comic and expanded into advertising, films, TV series, ice capades, video games, theme parks, and dolls.
        </p>
      </div>
    );
  }
}
 
export default Home;