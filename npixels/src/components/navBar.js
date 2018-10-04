import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
 } from 'reactstrap';
class navBar extends Component {

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img src="/img/logo.png" alt="NPixels" className="logoPrincipal"></img>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }

}

export default navBar;
