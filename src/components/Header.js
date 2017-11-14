import React from 'react';
import { Navbar, NavDropdown, NavItem, Nav, MenuItem, Grid, Row, Col, Image } from 'react-bootstrap'
import Radium from 'radium'
import logo from '../assets/images/logo1.png';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import globalStyles from '../globalStyle';
import globalConst from '../globalConst';
import Button from './Button';
import {Link } from 'react-router'
require('../global.css');


// var cusImage = Radium(Image);
var styles = {
  wrapperBg: {
    background: globalConst.bgTheme,
    border: 'none',
    fontFamily: globalConst.themeFont
  },
  headerLi: {
    listStyle: "none",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "20px",
    paddingRight: "35px",
    lineHeight: "24px",
    position: "relative",
    borderRight: globalConst.borderStyle1,
    '@media (max-width: 645px)': {
      borderRight: "none",
    }
  },
  block: {
    display: "block",
    textAlign: 'left',
  },
  icon: {
    verticalAlign: "top",
    fontSize: "3em",
    margin: "5px 10px",
    color: globalConst.themeColor,

  },
  inlineBlock: {
    display: 'inline-block'
  },

  navItem: {
    color: globalConst.themeColor,
    fontSize: 20,
    fontWeight: 600 
  },
  top: {
    top: 123,
  },
  smCenter: {
    '@media (max-width: 768px)': {
      margin: 'auto',
      textAlign: 'center'
    }
  },
  borderNone: {
    border: "none",
  },
  rightMargin0: {
    marginRight: 0
  }
}




class Header extends React.Component {
  render() {
    return (
      <div key={"mainWrap"} style={[styles.wrapperBg, { position: 'static' }]}>
        <header style={[]}>
          <Grid>
            <Row className="show-grid" style={{
              borderBottom: globalConst.borderStyle1,
              paddingBottom: 30
            }}>
              <Col sm={12} md={3} >
                <img src={logo} key={1} style={[globalStyles.img, styles.smCenter]} />
              </Col>
              <Col sm={12} md={9} style={{ textAlign: 'right' }}>
                <ul key={2} style={styles.smCenter}>
                  <li key={"li1"} style={[styles.headerLi, globalStyles.margin30]} >
                    <MdLocalPhone style={styles.icon} />
                    <div style={styles.inlineBlock}>
                      <span style={styles.block}>
                        Questions?
                      </span>
                      <span style={styles.block} >
                        0313-8167414
                      </span>
                    </div>
                  </li>
                  <li key={"li2"} style={[styles.headerLi, globalStyles.margin30]}>
                    <FaMapMarker style={styles.icon} />
                      <div style={styles.inlineBlock}>
                        <span style={styles.block}>
                          Our Office
                        </span>
                        <span style={styles.block}>
                          Askari 4,DHA,Karachi
                        </span>
                      </div>
                    </li>
                  <li key={"li3"} style={[styles.headerLi, globalStyles.margin30, styles.borderNone, styles.rightMargin0]}>
                    <Link to="request_service"> <Button base={true} >
                      Buy a Phone
                    </Button> </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </header>

        <Navbar collapseOnSelect style={Object.assign({}, styles.wrapperBg, { marginBottom: 0 })}>
          <Navbar.Header style={styles.hiddenMd} >
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
              <Link to="/home">
                <span style={styles.navItem}>
                  HOME
                </span>
              </Link>               
              </NavItem>

              <NavDropdown eventKey={2} title="PRODUCTS" id="basic-nav-dropdown" style={{
                color: "#fff!important",
                fontSize: 20,
                fontWeight: 600 
              }
              }>
              <MenuItem eventKey={2.1}>
              <Link to="/allServices">
                PRODUCTS
                
                </Link>
                
                </MenuItem>
                <MenuItem eventKey={2.1}>Mobiles</MenuItem>
                
        
                <MenuItem eventKey={2.2}>SmartPhones</MenuItem>
                <MenuItem eventKey={2.3}>Tablets</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.4}>Other Products</MenuItem>
              </NavDropdown>


              <NavItem eventKey={3} href="#">
              <Link to="/contactUs">
                
                <span style={styles.navItem}>
                  CONTACT US
                </span>
                </Link>
              </NavItem>

              <NavItem eventKey={3} href="#">
              <Link to="/aboutUs">
                
                <span style={styles.navItem}>
                  ABOUT US                </span>
                </Link>
              </NavItem>
            </Nav>

            {/* <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <span style={styles.navItem}>
                  Register
              </span>
              </NavItem>

              <NavItem eventKey={2} href="#">
                <span style={styles.navItem}>
                  Login
                </span>
              </NavItem>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

Header = Radium(Header);
export default Header;