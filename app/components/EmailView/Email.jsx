"use strict";
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

class EmailView extends Component {

  state = {
    favoriteMail: false
  };

  toggleFavoriteMail = (e) => {
    e.preventDefault();
    this.setState({
      favoriteMail: !this.state.favoriteMail
    });
  };

  render(){
    const { favoriteMail } = this.state;
    const favoriteMailClasses = classNames({
      "fa fa-star-o text-muted fa-lg text": !favoriteMail,
      "fa fa-star text-warning fa-lg text-active": favoriteMail
    });

    return(
          <div className="main-content">
            <section id="content" className="bg-white">
              <div className="row">

                <div className="mail-folders sidebar bg-lighter sidebar-small col-md-2">
                  <div className="inner-container">
                      <div className="text-center clearfix bg-white">
                        <button className="btn btn-sm btn-danger large-control-button">
                          <i className="fa fa-edit"></i> Compose
                        </button>
                      </div>
                      <div className="list-group list-normal m-b-none">
                        <a href="#" className="list-group-item active">
                          <i className="fa fa-fw fa-inbox"></i>
                          <span className="badge m-r pull-right">8</span>
                          Inbox
                        </a>
                        <a href="#" className="list-group-item">
                          <i className="fa fa-fw fa-envelope-o"></i>
                          Sent mail
                        </a>
                        <a href="#" className="list-group-item">
                          <i className="fa fa-fw fa-star-o"></i>
                          <span className="badge m-r pull-right">3</span>
                          Starred
                        </a>
                        <a href="#" className="list-group-item">
                          <i className="fa fa-fw fa-bookmark-o"></i>
                          <span className="badge m-r pull-right">4</span>
                          Important
                        </a>
                        <a href="#" className="list-group-item">
                          <i className="fa fa-fw fa-pencil"></i>
                          Draft
                        </a>
                        <a href="#" className="list-group-item">
                          <i className="fa fa-fw fa-trash-o"></i>
                          Trash
                        </a>
                        <a href="#" className="list-group-item">
                          <i className="fa fa-fw fa-user"></i>
                          <span className="badge m-r pull-right">23</span>
                          Contacts
                        </a>
                      </div>
                  </div>
                </div>

                <div className="mail-list sidebar sidebar-large col-md-3">

                      <div className="padder header-bar bg clearfix">

                        <div className="pagination-control btn-group pull-right">
                          <button type="button"
                                  className="btn btn-sm btn-secondary">
                            <i className="fa fa-chevron-left"></i>
                          </button>
                          <button type="button"
                                  className="btn btn-sm btn-secondary">
                            <i className="fa fa-chevron-right"></i>
                          </button>
                        </div>

                        <div className="filter-control btn-group dropdown">
                          <button className="btn btn-sm btn-secondary dropdown-toggle"
                                  data-toggle="dropdown">
                            Filter
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu text-left text-small">
                            <li className="dropdown-item" >
                              <a href="#">
                                <i className="fa fa-envelope-open-o"></i>
                                Read
                              </a>
                            </li>
                            <li className="dropdown-item" >
                              <a href="#">
                                <i className="fa fa-envelope-o"></i>
                                Unread
                              </a>
                            </li>
                            <li className="dropdown-item" >
                              <a href="#">
                                <i className="fa fa-star"></i>
                                Starred
                              </a>
                            </li>
                            <li className="dropdown-item" >
                              <a href="#">
                                <i className="fa fa-star-o"></i>
                                Unstarred
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="refresh-control btn-group">
                          <button className="btn btn-sm btn-secondary">
                            <i className="fa fa-refresh"></i>
                          </button>
                        </div>
                      </div>

                      <div className="list-group list-normal">
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">3 minutes ago</small>
                            <span className="sender">Thomas Edison</span>
                            <small className="preview-text">Vestibulum ullamcorper sodales nisi nec...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                              title="">
                            <small className="pull-right text-muted">1 hour ago</small>
                             <span className="sender">Socrates</span>
                             <small className="preview-text">Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">2 hours ago</small>
                            <span className="sender">Jay Zee</span>
                            <small className="preview-text">Vestibulum ullamcorper sodales nisi nec...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">1 day ago</small>
                            <span className="sender">Marcus Aurelius</span>
                            <small className="preview-text">Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                        <div className="list-group-item active">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">3 days ago</small>
                            <span className="sender">Dr. James</span>
                            <small className="preview-text">Direct Pay Physician Conference in NYC...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">Jun 21</small>
                            <span className="sender">DaVinci</span>
                            <small className="preview-text">Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">May 10</small>
                            <span className="sender">Mark Twain</span>
                            <small className="preview-text">Vestibulum ullamcorper sodales nisi nec...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">Jan 2</small>
                            <span className="sender">Charles Babbage</span>
                            <small className="preview-text">Morbi nec nunc condimentum...</small>
                          </a>
                        </div>

                      </div>
                </div>

                <div className="mail-content main col-md-5">
                  <div className="email-header row">
                    <h3>
                      <span>Direct Primary Care Symposium NYC &mdash; May 2017</span>
                    </h3>
                    <div className="meta-data text-small col-xs-8">
                      <div className="sender-avatar">
                        <a href="#"
                           className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-5.jpg"
                               alt="Dr. James"
                               title="Dr. James"
                               className="img-circle" />
                        </a>
                      </div>
                      <div className="sender-info">
                        <span className="name">
                          Dr. James
                        </span>
                        <span className="email text-muted">
                          &lt;james_dpc_md@directpayphysicians.com&gt; to me
                        </span>
                      </div>
                    </div>

                    <div className="controls text-small col-xs-4">

                      <div className="send-date text-muted">
                        <small>Decemeber 5 (<em>3 days ago</em>)</small>
                      </div>

                      <a href="#"
                         data-toggle="className">
                        <i className={ favoriteMailClasses }
                           onClick={this.toggleFavoriteMail}></i>
                      </a>
                      <div className="btn-group dropdown pull-right">
                        <button className="btn btn-secondary"
                                title="Reply to email">
                          <i className="fa fa-reply"></i>
                        </button>
                        <button className="btn btn-secondary"
                                title="Forward email">
                          <i className="fa fa-mail-forward"></i>
                        </button>
                        <button className="btn btn-white dropdown-toggle"
                                data-toggle="dropdown">
                          <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li className="dropdown-item">
                            <a href="#">
                              <i className="fa fa-user-plus"></i>
                              Add Dr. James to contact list
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="#">
                              <i className="fa fa-envelope-o"></i>
                              Mark as unread
                            </a>
                          </li>
                          <li className="dropdown-divider"></li>
                          <li className="dropdown-item">
                            <a href="#">
                              <i className="fa fa-remove"></i>
                              Delete email
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="#">
                              <i className="fa fa-warning"></i>
                              Report spam
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="email-content text-small">
                        <p>Mr. Polo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</p>
                        <blockquote>
                          <em>Morbi nec nunc condimentum, egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementum ligula. Nunc placerat purus quam, ac adipiscing arcu rutrum eu. Vestibulum adipiscing ut augue ut auctor. Vestibulum nec lorem imperdiet nibh mollis gravida ut a justo.<br /><br />
                          Suspendisse arcu nulla, mollis sed eros id, pellentesque vulputate nulla. Nullam lectus dolor, pulvinar eu tristique nec, tempus ut ligula. Quisque pulvinar ut justo id dapibus. Duis convallis tellus faucibus nisl fermentum, nec semper massa adipiscing. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vestibulum est vel elementum pellentesque.</em>
                        </blockquote>
                        <p>Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p>Regards<br />Dr. James</p>
                      </div>

                  <div className="email-footer text-small">
                    <div className="card-body">
                      Click here to
                      <a href="#" title="Reply to this email">Reply</a>
                        or
                      <a href="#" title="Forward this email">Forward</a>
                    </div>
                  </div>
                </div>

                <div className="contact-list sidebar bg text-small col-md-2">

                  <div className="header-bar bg clearfix">
                    <div className="respond input-group">
                      <div className="top">
                        <input type="text"
                               className="form-control"
                                placeholder="thoughts..." />
                      </div>
                      <div className="bottom">
                        <span className="input-group-addon btn btn-sm" >
                          <a href="#"
                             className="btn-secondary"
                             title="Invite user to group chat">
                            <i className="fa fa fa-user-plus"></i>
                          </a>
                        </span>
                        <span className="input-group-addon btn btn-sm" >
                          <a href="#"
                             className="btn-secondary"
                             title="Reload group chat">
                            <i className="fa fa fa-refresh"></i>
                          </a>
                        </span>
                        <span className="input-group-addon btn btn-sm" >
                          <a href="#"
                             className="btn-secondary"
                             title="Reply to group">
                            <i className="fa fa fa-comment"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="list-group list-normal">
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-1.jpg"
                               alt="Jay Zee - Sales Representative"
                               title="Jay Zee - Sales Representative"
                               className="img-circle" />
                        </span>
                        <div className="pull-right text-success m-t-small">
                          <i className="fa fa-circle"></i>
                        </div>
                        <div className="media-body">
                          <div>
                            <a href="#">
                              Jay Zee
                              <span className="small"> said</span>:
                            </a>
                            <span>
                              what's going on??
                            </span>
                          </div>
                          <small className="text-muted">5 minutes ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-7.jpg"
                               alt="Tom - Office Staff"
                               title="Tom - Office Staff"
                               className="img-circle" />
                        </span>
                        <div className="pull-right text-success m-t-small">
                          <i className="fa fa-circle"></i>
                        </div>
                        <div className="media-body">
                          <div>
                            <a href="#">
                              Tom
                              <span className="small"> said</span>:
                            </a>
                            <span>
                              There may be an office orientation for a new patient in 10 minutes.
                            </span>
                          </div>
                          <small className="text-muted">35 minutes ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-13.jpg"
                               alt="Liz - Office Manager"
                               title="Liz - Office Manager"
                               className="img-circle" />
                        </span>
                        <div className="pull-right text-warning m-t-small">
                          <i className="fa fa-circle"></i>
                        </div>
                        <div className="media-body">
                          <div>
                            <a href="#">
                              Liz
                              <span className="small"> said</span>:
                            </a>
                            <span>
                              Taking an online certification.  Will need to focus for a while.
                            </span>
                          </div>
                          <small className="text-muted">2 hours ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-8.jpg"
                               alt="Tina - Head Nurse"
                               title="Tina - Head Nurse"
                               className="img-circle" />
                        </span>
                        <div className="pull-right text-warning m-t-small">
                          <i className="fa fa-circle"></i>
                        </div>
                        <div className="media-body">
                          <div>
                            <a href="#">
                              Tina
                              <span className="small"> said</span>:
                            </a>
                            <span>
                              Errands!!!!
                            </span>
                          </div>
                          <small className="text-muted">2 hours ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-15.jpg"
                               alt="Mike - Contractor"
                               title="Mike - Contractor"
                               className="img-circle" />
                        </span>
                        <div className="pull-right text-danger m-t-small">
                          <i className="fa fa-circle"></i>
                        </div>
                        <div className="media-body">
                          <div>
                            <a href="#">
                              Mike
                              <span className="small"> said</span>:
                            </a>
                            <span>
                              Leaving early. Out for the day.
                            </span>
                          </div>
                          <small className="text-muted">5 hours ago</small>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </section>
          </div>
    )
  }
}

export default EmailView;
