"use strict";
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const notifications = 5;
const username = "Dr. Marco Polo";
const mobileMenuClasses = 'slide-nav slide-nav-left';

const toggleMenu = (open) => {
  let mobileSlideUpdate;
  if(open) {
    document.body.className = '';
    mobileSlideUpdate = false;
  }
  else {
    document.body.className = mobileMenuClasses;
    mobileSlideUpdate = true;
  }

  return mobileSlideUpdate;
};

class Header extends Component {

  state = {
    mobileSlideOpen: false
  };

  handleMobileMenuClick = (e) => {
    e.preventDefault();
    const panelState = toggleMenu(this.state.mobileSlideOpen);
    this.setState({
      mobileSlideOpen : panelState
    });
  };

  render(){
    return(
        <header className="navbar navbar-fixed-top">

          <ul className="navbar-avatar float-xs-right">
            <li className="dropdown">
              <a href="#"
                 className="dropdown-toggle"
                 data-toggle="dropdown">
                <span className="username hidden-xs-down">
                  { username }
                </span>
                <span className="thumb-small avatar">
                  <img src="/app/assets/images/avatars/profile-avatar-4.jpg"
                       alt="Marc Otto"
                       className="img-fluid rounded-circle" />
                </span>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#">
                    <i className="fa fa-bell-o"></i>
                    Notifications
                    <span className="badge bg-danger pull-right">
                      { notifications }
                    </span>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i className="fa fa-bed"></i>
                    Patients
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                     <i className="fa fa-money"></i>
                    Billing
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i className="fa fa-calendar-o"></i>
                    Appointments
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item">
                  <a href="#">
                     <i className="fa fa-user-circle"></i>
                    Profile
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                     <i className="fa fa-question-circle-o"></i>
                    Help
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i className="fa fa-sign-out"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <button type="button"
                  className="btn btn-link float-xs-left nav-bar-toggler hidden-sm-up"
                  onClick={this.handleMobileMenuClick}>
            <i className="fa fa-bars fa-lg text-default"></i>
          </button>

          <ul className="nav navbar-nav hidden-xs-down">
            <li className="nav-item notifications-wrapper">
              <div className="dropdown notifications-panel">
                <a href="#"
                   title="View most recent notifications"
                   className="dropdown-toggle"
                   data-toggle="dropdown">
                  <i className="fa fa-bell-o fa-fw fa-lg text-default"></i>
                  <b className="badge badge-notes bg-danger"> { notifications } </b>
                </a>
                <section className="dropdown-menu">
                  <section className="panel">
                    <header className="panel-heading">
                      <span className="h6">
                        <strong>Notifications</strong>
                      </span>
                    </header>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <a href="#"
                           className="media">
                          <span className="pull-left thumb-small">
                            <i className="fa fa-clock-o text-default"></i>
                          </span>
                          <span className="media-body">
                            <span>Meeting:  Pharma at 3:45 PM Eastern</span>
                            <small className="text-muted">1 minute ago</small>
                          </span>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#"
                           className="media">
                          <span className="pull-left thumb-small">
                            <i className="fa fa-calendar text-default"></i>
                          </span>
                          <span className="media-body">
                            <span>Appointment:  Created for Sam Welch on Feb 23rd</span>
                            <small className="text-muted">5 Jan 17</small>
                          </span>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#" className="media">
                          <span className="pull-left thumb-small">
                            <i className="fa fa-envelope-o text-default"></i>
                          </span>
                          <span className="media-body">
                            <span>Inbox: Message from Thomas Edison</span>
                            <small className="text-muted">5 July 17</small>
                          </span>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#" className="media">
                          <span className="pull-left thumb-small">
                            <i className="fa fa-envelope-o text-default"></i>
                          </span>
                          <span className="media-body">
                            <span>Inbox: Message from Socrates</span>
                            <small className="text-muted">5 June 17</small>
                          </span>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#" className="media">
                          <span className="pull-left thumb-small">
                            <i className="fa fa-clock-o text-default"></i>
                          </span>
                          <span className="media-body">
                            <span>Meeting: Wireless providers at 11:30 AM Eastern</span>
                            <small className="text-muted">5 June 17</small>
                          </span>
                        </a>
                      </li>
                    </ul>
                    <footer className="panel-footer">
                      <div className="col-xs-10">
                        <a href="#"
                           title="See remaining notifications">See all notifications</a>
                      </div>
                      <div className="col-xs-2">
                        <a href="#"
                           title="View notification settings">
                          <i className="fa fa-cog"></i>
                        </a>
                      </div>
                    </footer>
                  </section>
                </section>
              </div>
            </li>
            <li className="nav-item post-wrapper">
              <div className="m-t-small">
                <button className="btn btn-sm large-control-button btn-info "
                   title="Add a new note"
                   data-toggle="modal"
                   href="#modal">
                   <i className="fa fa-fw fa-plus"></i>
                   Note
                </button>
              </div>
            </li>
            <li className="nav-item search-wrapper">
              <form className="navbar-form"
                    action="#">
                <input type="text"
                       title="Enter search request"
                       className="input-sm form-control"
                       placeholder="Search" />
                <button type="submit"
                        title="Submit your search">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </li>
          </ul>

        </header>
    )
  }

}


export default Header;
