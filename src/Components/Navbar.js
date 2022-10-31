import "./NavbarStyle.css";
import { NavItems } from "./NavItems"

import React from 'react'

class Navbar extends React.Component  {
  state = { clicked: false}
 clickHandler = () => {
      this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <header>
          <nav className="navbar">
              <h1 className="navbar-logo">
                Richy
              </h1>              
              <ul className={ this.state.clicked ? "nav-ul active" : "nav-ul"}>
                {NavItems.map((item, index) => {
                  return(
                      <li key={index} className={item.cName}>
                        <a href={item.url} className="nav-icon">
                          <i className={item.icon}></i>
                          {item.title}
                        </a>
                        
                      </li>
                  )
                })}
                
                <button className="btn btn-dark btn-md text-light mx-3">SignUp</button>
                 
              </ul>
              <div className="menu-icons" onClick={this.clickHandler}>
                  <i className={this.state.clicked ? "fas fa-times" : 
                    "fas fa-bars"}>
                  </i>
              </div>
          </nav>
      </header>
    )
  }
 
}

export default Navbar

