import React,{useContext} from 'react'
import './Nav.css'
import { Link, useHistory } from "react-router-dom"
import {SimContext} from '../../SimContext';


export const NavBar = () => {
  const {cartItems} =useContext(SimContext)

    return (
        <div>
          <nav className="navbar fixed-top navbar-expand">
            <div class="container-fluid">
              <a class=" logo navbar-brand">Material-hub</a>
              <div class=" input navbar-brand">
                <form class="d-flex input-group w-auto">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="backs input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </form>
              </div>
              
              <div class=" objects navbar-brand">
                <ul class="navbar-nav d-flex flex-row">
                  <div class="circle">
                    <li class="nav-item me-3 me-lg-0">
                      <a class="nav-link" href="#">
                        <Link to='/cartBasket'>
                          <i class="fas fa-shopping-cart"></i>
                        </Link>
                      </a>
                    </li> 
                       <span class=" cart badge rounded-pill ">{cartItems.length}</span>
                  </div>

                  <div class="circle">
                    <li class="nav-item me-3 me-lg-0">
                      <a class="nav-link" href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                  </div>
                    
                    <div class="dropdown">
                      <a>Welcome! user</a><br/>
                      <Link to='/signup'>Signup</Link>||<Link to='/login'>Sign in</Link>
                    </div>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}
