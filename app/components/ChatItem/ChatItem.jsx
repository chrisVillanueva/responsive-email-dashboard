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
                <div className="sidebar bg-lighter sidebar-small mail-folders col-md-2">
                  <div className="inner-container">
                      <div className="text-center clearfix bg-white"><button className="btn btn-sm btn-danger m-t m-b"><i className="fa fa-edit"></i> Compose</button></div>
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

                <div className="sidebar sidebar-large mail-list col-md-3">
                      <div className="padder header-bar bg clearfix">
                        <div className="btn-group m-t pull-right">
                          <button type="button" className="btn btn-sm btn-white"><i className="fa fa-chevron-left"></i></button>
                          <button type="button" className="btn btn-sm btn-white"><i className="fa fa-chevron-right"></i></button>
                        </div>
                        <div className="btn-group m-t m-b">
                          <button className="btn btn-white btn-sm dropdown-toggle" data-toggle="dropdown">Filter <span className="caret"></span></button>
                          <ul className="dropdown-menu text-left text-small">
                            <li><a href="#">Read</a></li>
                            <li><a href="#">Unread</a></li>
                            <li><a href="#">Starred</a></li>
                            <li><a href="#">Unstarred</a></li>
                          </ul>
                        </div>
                        <button className="btn btn-sm btn-white" data-toggle="tooltip" data-title="Refresh"><i className="fa fa-refresh"></i></button>
                      </div>
                      <div className="list-group list-normal m-t-n-xmini scroll-y scrollbar">
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">3 minutes ago</small>
                            <span>Thomas Edison</span>
                            <small>Vestibulum ullamcorper sodales nisi nec...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                              title="">
                            <small className="pull-right text-muted">1 hour ago</small>
                            <span>Socrates</span>
                            <small>Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">2 hours ago</small>
                            <span>Jay Zee</span>
                            <small>Vestibulum ullamcorper sodales nisi nec...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">1 day ago</small>
                            <span>Marcus Aurelius</span>
                            <small>Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                        <div className="list-group-item active">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">3 days ago</small>
                            <span>Dr. James</span>
                            <small>Direct Pay Physician Conference in NYC...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">Jun 21</small>
                            <span>DaVinci</span>
                            <small>Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">May 10</small>
                            <span>Mark Twain</span>
                            <small>Vestibulum ullamcorper sodales nisi nec...</small>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a href="#"
                             title="">
                            <small className="pull-right text-muted">Jan 2</small>
                            <strong>Charles Babbage</strong>
                            <small>Morbi nec nunc condimentum...</small>
                          </a>
                        </div>
                      </div>
                </div>

                <div className="main mail-content col-md-4">
                      <div className="mail-header">
                        <h3>
                          <span>Direct Pay Physician Conference NYC &mdash; May 2017</span>
                        </h3>
                      </div>
                      <div className="text-small padder">
                        <div className="block clearfix">
                          <a href="#" className="pull-left thumb-small">
                            <img src="/app/assets/images/avatars/profile-avatar-5.jpg"
                                 alt="Dr. James"
                                 title="Dr. James"
                                 className="img-circle" />
                          </a> Dr. James
                          &lt;james_crazy_md@directpayphysicians.com&gt; to me
                          <div className="pull-right inline">Decemeber 5 (<em>3 days ago</em>)
                            <a href="#" data-toggle="className">
                              <i className={ favoriteMailClasses }
                                 onClick={this.toggleFavoriteMail}></i>
                            </a>
                            <div className="btn-group">
                              <button className="btn btn-white btn-xs" data-toggle="tooltip"
                                      data-title="Reply"><i className="fa fa-reply"></i></button>
                              <button className="btn btn-white btn-xs dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></button>
                              <ul className="dropdown-menu pull-right">
                                <li><a href="#"><i className="fa fa-reply"></i> Reply</a></li>
                                <li><a href="#"><i className="fa fa-sign-out"></i> Forward</a></li>
                                <li><a href="#">Add Mika Sokeil to contact list</a></li>
                                <li><a href="#">Mark as unread</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Delete this message</a></li>
                                <li><a href="#">Report spam</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p>Mr. Polo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</p>
                        <blockquote>
                          <em>Morbi nec nunc condimentum, egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementum ligula. Nunc placerat purus quam, ac adipiscing arcu rutrum eu. Vestibulum adipiscing ut augue ut auctor. Vestibulum nec lorem imperdiet nibh mollis gravida ut a justo.<br /><br />
                          Suspendisse arcu nulla, mollis sed eros id, pellentesque vulputate nulla. Nullam lectus dolor, pulvinar eu tristique nec, tempus ut ligula. Quisque pulvinar ut justo id dapibus. Duis convallis tellus faucibus nisl fermentum, nec semper massa adipiscing. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vestibulum est vel elementum pellentesque.</em>
                        </blockquote>
                        <p>Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p>Regards<br />Dr. James</p>
                      </div>
                      <div className="email-footer">
                        <form className="card text-small">
                          <div className="card-body">
                            Click here to
                            <a href="#" title="Reply to this email">Reply</a>
                            or
                            <a href="#" title="Forward this email">Forward</a>
                          </div>
                        </form>
                      </div>
                </div>

                <div className="sidebar bg text-small contact-list col-md-3">
                  <ul className="list-group list-normal">
                    <li className="list-group-item">
                      <div className="media chat-item">
                        <span className="pull-left thumb-small">
                          <img src="/app/assets/images/avatars/profile-avatar-4.jpg"
                               alt="Dr. Marco Polo"
                               title="Dr. Marco Polo"
                               className="img-circle" />
                        </span>
                        <div className="pull-right text-success m-t-small">
                          <i className="fa fa-circle"></i>
                        </div>
                        <div className="media-body">
                          <div>
                            <a href="#">
                              Dr. Marco Polo
                              <span className="small"> said</span>:
                            </a>
                            <span>
                              not much Jay.  just chillaxin'
                            </span>
                          </div>
                          <small className="text-muted">2 minutes ago</small>
                        </div>
                      </div>
                    </li>
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
                  <p className="text-center add-contact">
                    <a className="btn btn-success btn-sm" href="#">
                      <i className="fa fa-plus"></i>
                      New Contact
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
    )
  }
}

export default EmailView;
