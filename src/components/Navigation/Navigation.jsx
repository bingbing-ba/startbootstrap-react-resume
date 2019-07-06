import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-scroll';

/**
 * Navigation
 *
 * @author Andrew Dyer <andrewdyer@outlook.com>
 */
class Navigation extends Component {
    state = {
        isOpen: false
    };

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Navbar className="navigation bg-primary" dark expand="lg" fixed="top">
                <NavbarBrand href="/">
                    <span className="d-block d-lg-none">Clarence Taylor</span>
                    <span className="d-none d-lg-block">
                        <img
                            className="img-fluid img-profile rounded-circle mx-auto mb-2"
                            src={require('../../img/profile.jpg')}
                            alt=""
                        />
                    </span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle.bind(this)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="about" spy={true} smooth={true} duration={500}>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Experience
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Education
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="skills" spy={true} smooth={true} duration={500}>
                                Skills
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="interests"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                Interests
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="awards" spy={true} smooth={true} duration={500}>
                                Awards
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
