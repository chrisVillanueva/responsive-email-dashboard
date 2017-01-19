"use strict";
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../../components/common/Header/Header';
import Navigation from './../../components/common/Navigation/Navigation';
import Footer from './../../components/common/Footer/Footer';
import EmailView from './../../components/EmailView/Email';

class Dashboard extends Component {
  render(){
    return(
      <div id="dashboard-email" className="dashboard">
        <Header />
        <div className="container-fluid content-wrapper">
          <Navigation />
          <EmailView />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
