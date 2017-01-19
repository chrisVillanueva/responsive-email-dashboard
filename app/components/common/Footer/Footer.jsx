"use strict";
import _ from 'lodash';
import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer className="footer">
          <div className="clearfix">
            <p>
              &copy; 2016+ || nah;  Responsive Mail Dashboard Module w/
              <a href="http://v4-alpha.getbootstrap.com/"
                 title="View Bootstrap 4 Features"
                 target="_blank">
                Bootstrap 4 Alpha
              </a>
            </p>
          </div>
      </footer>
    )
  }

}


export default Footer;
