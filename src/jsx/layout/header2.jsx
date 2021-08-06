import React, { } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, } from 'react-bootstrap'



function Header2() {

    return (
        <>
            <div className="header dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>

                                <div className="dashboard_log my-2">
                                    <div className="d-flex align-items-center">
                                        <div className="account_money">
                                            <ul>
                                                <li className="usd">
                                                    <span>3000000000 WOT </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <DropdownButton
                                            alignRight
                                            title="Connect Wallet"
                                            className="profile_log"
                                        >
                                            <Link to={'./accounts'} className="dropdown-item">
                                                <i className="la la-user"></i> Connect
                                            </Link>
                                            <Link to={'./history'} className="dropdown-item">
                                                <i className="la la-book"></i> Log Out
                                            </Link>
                                            
                                        </DropdownButton>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header2;