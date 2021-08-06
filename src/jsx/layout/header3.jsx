import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'



function Header3() {

    return (
        <>
            <div className="header landing_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar  expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <Nav className="mr-auto">
                                            <Nav.Item><a className="nav-link" href="#intro">Home</a></Nav.Item>
                                            <Nav.Item><a className="nav-link" href="#demo">Demo</a></Nav.Item>
                                            <Nav.Item><a className="nav-link" href="#support">Suppport</a></Nav.Item>
                                        </Nav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn">
                                        <Link href="#" className="btn btn-primary" target="blank" >Buy</Link>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header3;