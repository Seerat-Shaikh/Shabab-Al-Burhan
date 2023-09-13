import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Welcome = () => {
  return (
    <StyledHeader>
      <CustomNavbar variant="dark" expand="lg" collapseOnSelect>
        <NavbarBrandWrapper>
          <Navbar.Brand>Attendance Management System</Navbar.Brand>
        </NavbarBrandWrapper>
      </CustomNavbar>
      <ContentWrapper>
        <h1>
          Marhaba{" "}
          <span
            style={{
              margin: "0 15px",
              background: "linear-gradient(to top, #007cb9, #a7bcb9",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Bika
          </span>{" "}
          Burhan
        </h1>
        <h3>Empowering Education and Park Management</h3>
        <p>Shabab Al Burhan is more than just a program;</p>
        <p>
          it is a manifestation of our commitment to the Islamic way of life.
        </p>

        <ButtonWrapper>
          <LinkContainer to="/login">
            <Button variant="primary">
              <FaSignInAlt /> Login
            </Button>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Button variant="success">
              <FaSignOutAlt /> Sign Up
            </Button>
          </LinkContainer>
        </ButtonWrapper>
      </ContentWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  h1 {
    font-size: 7rem;
    color: #6c5b7c;
    font-family: "Dancing Script";
    font-weight: 700;
  }

  h3 {
    font-family: "Noto Serif";
    font-weight: 500;
    font-size: 32px;
  }

  p {
    font-family: sans-serif;
    font-size: 20px;
    line-height: 1rem;
    margin-top: 0.5rem;
    color: #24527a;
  }
`;

const CustomNavbar = styled(Navbar)`
  margin-top: -0.5rem;
  width: 100%;
`;

const NavbarBrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #e4f1fe;
  //background-color: #8dc6ff;
  .navbar-brand {
    font-size: 28px;
    color: black;
    font-family: "Bitter", cursive;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 10%;
  padding: 14px 0;
  margin-top: 2rem;
  border-radius: 25px;
  background-color: #007cb9;
  color: #8dc6ff;
  border: none;
  position: relative; 
  font-size: 20px;
  box-shadow: 5px 0px 15px rgba(108, 91, 124, 1); 


  &:hover {
    cursor: pointer;
    background-color: #a2a8d3;
    color: white;
  }
`;

export default Welcome;
