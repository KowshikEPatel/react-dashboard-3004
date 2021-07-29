import React from 'react'

export default function Topbar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>


                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Alerts Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                </li>


                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                    alt="..."/>
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                    alt="..."/>
                                <div className="status-indicator"></div>
                            </div>
                            <div>
                                <div className="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                <div className="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                    alt="..."/>
                                <div className="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                    alt="..."/>
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>


                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	                        viewBox="0 0 108.3 108.3" style={{enablebackground:"new 0 0 108.3 108.3"}} >
                            <g id="Group_45" transform="translate(-191 -152.079)">
	                        <g id="Group_30" transform="translate(282.246 224.353)">
		                    <path id="Path_944" className="st0" style={{fill:"#E6E6E6"}} d="M17.1-18.1c0,10.5-3,20.8-8.8,29.6c-1.2,1.9-2.5,3.6-4,5.3c-3.4,4-7.3,7.4-11.6,10.3
			                    c-1.2,0.8-2.4,1.5-3.6,2.2c-6.5,3.6-13.7,5.8-21,6.5c-1.7,0.2-3.4,0.2-5.1,0.2c-4.7,0-9.4-0.6-14-1.8c-2.6-0.7-5.1-1.6-7.6-2.6
			                    c-1.3-0.5-2.5-1.1-3.7-1.8c-2.9-1.5-5.6-3.3-8.2-5.3c-1.2-0.9-2.3-1.9-3.4-2.9C-95.8,1.3-97.1-33-76.8-54.9s54.6-23.3,76.5-2.9
			                    C10.8-47.6,17.1-33.2,17.1-18.1L17.1-18.1z"/>
		                    <path id="Path_945" className="st1" style={{fill:"#FFB8B8"}} d="M-50.2-13.2c0,0,4.9,13.7,1.1,21.4s6,16.4,6,16.4s25.8-13.1,22.5-19.7s-8.8-15.3-7.7-20.8
			                    L-50.2-13.2z"/>
		                    <ellipse id="Ellipse_185" className="st1" style={{fill:"#FFB8B8"}} cx="-40.6" cy="-25.5" rx="17.5" ry="17.5"/>
		                    <path id="Path_946" className="st2" style={{fill:"#575A89"}} d="M-51.1,34.2c-2.6-0.7-5.1-1.6-7.6-2.6l0.5-13.3l4.9-11c1.1,0.9,2.3,1.6,3.5,2.3
			                    c0.3,0.2,0.6,0.3,0.9,0.5c4.6,2.2,12.2,4.2,19.5-1.3c2.7-2.1,5-4.7,6.7-7.6L-8.8,9l0.7,8.4l0.8,9.8c-1.2,0.8-2.4,1.5-3.6,2.2
			                    c-6.5,3.6-13.7,5.8-21,6.5c-1.7,0.2-3.4,0.2-5.1,0.2C-41.8,36.1-46.5,35.4-51.1,34.2z"/>
		                    <path id="Path_947" className="st2" style={{fill:"#575A89"}} d="M-47.7-0.9L-47.7-0.9l-0.7,7.2l-0.4,3.8l-0.5,5.6l-1.8,18.5c-2.6-0.7-5.1-1.6-7.6-2.6
			                    c-1.3-0.5-2.5-1.1-3.7-1.8c-2.9-1.5-5.6-3.3-8.2-5.3l-1.9-9l0.1-0.1L-47.7-0.9z"/>
		                    <path id="Path_948" className="st2" style={{fill:"#575A89"}} d="M-10.9,29.3c-6.5,3.6-13.7,5.8-21,6.5c0.4-6.7,1-13.1,1.6-18.8c0.3-2.9,0.7-5.7,1.1-8.2
			                    c1.2-8,2.5-13.5,3.4-14.2l6.1,4L4.9,7.3l-0.5,9.5c-3.4,4-7.3,7.4-11.6,10.3C-8.5,27.9-9.7,28.7-10.9,29.3z"/>
		                    <path id="Path_949" className="st2" style={{fill:"#575A89"}} d="M-70.5,24.6c-1.2-0.9-2.3-1.9-3.4-2.9l0.9-6.1l0.7-0.1l3.1-0.4l6.8,14.8
			                    C-65.2,28.3-67.9,26.6-70.5,24.6L-70.5,24.6z"/>
		                    <path id="Path_950" className="st2" style={{fill:"#575A89"}} d="M8.3,11.5c-1.2,1.9-2.5,3.6-4,5.3c-3.4,4-7.3,7.4-11.6,10.3c-1.2,0.8-2.4,1.5-3.6,2.2l-0.6-2.8
			                    l3.5-9.1l4.2-11.1l8.8,1.1C6.1,8.7,7.2,10.1,8.3,11.5z"/>
		                    <path id="Path_951" className="st3" style={{fill:"#2F2E41"}} d="M-23.9-41.4c-2.7-4.3-6.8-7.5-11.6-8.9l-3.6,2.9l1.4-3.3c-1.2-0.2-2.3-0.2-3.5-0.2l-3.2,4.1
			                    l1.3-4c-5.6,0.7-10.7,3.7-14,8.3c-4.1,5.9-4.8,14.1-0.8,20c1.1-3.4,2.4-6.6,3.5-9.9c0.9,0.1,1.7,0.1,2.6,0l1.3-3.1l0.4,3
			                    c4.2-0.4,10.3-1.2,14.3-1.9l-0.4-2.3l2.3,1.9c1.2-0.3,1.9-0.5,1.9-0.7c2.9,4.7,5.8,7.7,8.8,12.5C-22.1-29.8-20.2-35.3-23.9-41.4z"
			                    />
		                    <ellipse id="Ellipse_186" className="st1" cx="-24.9" cy="-26.1" rx="1.2" ry="2.4"/>
	                        </g>
                            </g>
                        </svg>
                    </a>
                    
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

            </nav> 
        </>
    )
}