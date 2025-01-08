import "../style/MyNavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Login } from "@mui/icons-material";

const MyNavBar = (props) => {
  // console.log(props.onSearch);
  const [keyWord, setKeyWord] = useState("");
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex navBar">
              <div className=" d-md-flex">
                <Link to={"/"}>
                  <Nav.Link href="#Home">Home</Nav.Link>
                </Link>
                <Link>
                  <Nav.Link href="#Cart">Cart</Nav.Link>
                </Link>
                <Nav.Link href="#Collection">Pricing</Nav.Link>
              </div>
              <div className="d-flex">
                
                <a href="#" onClick={() => {}}>
                  <Avatar alt="Remy Sharp" />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavBar;
