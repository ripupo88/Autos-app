import React, { useState, useContext } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from "mdbreact";
import { appContext } from "../../Core/context/context";
import { NavLink } from "react-router-dom";

export const RPRNavbar = () => {
    const { state, dispatch } = useContext(appContext);
    const { siteName } = state.conf;

    console.log(siteName);
    return <RPRNavbar1 props={{ siteName }} />;
};

const RPRNavbar1 = React.memo(({ props }) => {
    const [isOpen, setisOpen] = useState(false);
    const { siteName } = props;

    const toggleCollapse = () => {
        setisOpen(!isOpen);
    };

    return (
        <MDBNavbar color="elegant-color" dark expand="md">
            <MDBNavbarBrand>
                <strong>{siteName}</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <NavLink
                            className="nav-link"
                            activeStyle={{
                                backgroundColor: "grey",
                            }}
                            exact
                            to="/"
                        >
                            Home
                        </NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink
                            className="nav-link"
                            activeStyle={{
                                backgroundColor: "grey",
                            }}
                            to="/nosotros"
                        >
                            Nosotros
                        </NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink
                            className="nav-link"
                            activeStyle={{
                                backgroundColor: "grey",
                            }}
                            to="/faq"
                        >
                            Admin
                        </NavLink>
                    </MDBNavItem>
                    {/* <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">
                                        Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#!">
                                        Another Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#!">
                                        Something else here
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#!">
                                        Something else here
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem> */}
                    <MDBNavItem>
                        <MDBFormInline waves>
                            <div className="md-form my-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
});
