"use strict";
import _ from 'lodash';
import React, { Component } from 'react';

class Navigation extends Component {
  render(){
    return(
        <nav id="navbar" className="navigation nav-controls hidden-xs-down">
          <ul className="nav-list">
            <li className="">
              <a href="#"
                  title="View Module 1">
                <i className="fa fa-cube fa-lg"></i>
                <span>Module 1</span>
              </a>
            </li>
            <li className="active">
              <a href="#"
                 title="Currently viewing your mail">
                <b className="badge bg-danger pull-right">8</b>
                <i className="fa fa-envelope-o fa-lg"></i>
                <span>Mail</span>
              </a>
            </li>
            <li className="">
              <a href="#"
                 title="View Module 3">
                <i className="fa fa-cube fa-lg"></i>
                <span>Module 3</span>
              </a>
            </li>
            <li className="">
              <a href="#"
                 title="View Module 4">
                <i className="fa fa-cube fa-lg"></i>
                <span>Module 4</span>
              </a>
            </li>
            <li className="">
              <a href="#"
                 title="View Module 5">
                <i className="fa fa-cube fa-lg"></i>
                <span>Module 5</span>
              </a>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navigation;
