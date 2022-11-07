import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <div className="icons">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon2">
              <a href="https://www.linkedin.com/in/anastasia-brailovska-00ab2b179/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/nastianb"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <div className="copy">
            <p>Copyright 2022. All Rights Reserved</p>
            </div>
            
          </Col>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
