import {FC} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {navLinkType} from "./Header.interface";
import {navLinks} from "./Header.config";

const Header: FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">Շաուրմա Չորեքշաբթի</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((navLink: navLinkType): JSX.Element => {
              return (
                <Link className="nav-link" to={navLink.link} key={navLink.id}>{navLink.label}</Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;