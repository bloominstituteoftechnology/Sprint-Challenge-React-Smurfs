import React, { Component } from 'react';
import Nav from './Nav';


export default class SubNavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="SubNav-container">
              {this.props.menuData.map((menu, index) => <Nav key={index} path={`${this.props.match.path}${menu.name}`} name={menu.name} src={menu.src}/>)}
        </div>
    );
  }
}