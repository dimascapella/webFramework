import React from 'react';
import photo from './Assets/Image/foto.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import bio from './components/bio';
import project from './components/project';
import "bootstrap/dist/css/bootstrap.min.css";
import { faFacebookF, faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="main">
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10 mt-7">
              <div className="data py-4">
                <div className="row p-3">
                  <div className="col-lg-4">
                    <img src={photo} alt="profile" className="img-fluid foto-bio" style={{ borderRadius: "5px" }} />
                  </div>
                  <div className="col-lg-8 mt-3">
                    <div className="row">
                      <div className="col-lg-3">
                        <h4 className="weight-bold">Name</h4>
                      </div>
                      <div className="col-lg-9">
                        <h5>: Dimas Eka Adinandra</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">
                        <h4 className="weight-bold">Address</h4>
                      </div>
                      <div className="col-lg-9">
                        <h5>: Jl. Piano, Tunggulwulung</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">
                        <h4 className="weight-bold">Phone</h4>
                      </div>
                      <div className="col-lg-9">
                        <h5>: 081232066807</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">
                        <h4 className="weight-bold">Email</h4>
                      </div>
                      <div className="col-lg-9">
                        <h5>: dimascapella1590@gmail.com</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg d-flex justify-content-center">
                        <a className="px-4 mt-3 icons" href="https://www.facebook.com/dimas.capella" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a className="px-4 mt-3 icons" href="https://discordapp.com/channels/@me" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a className="px-4 mt-3 icons" href="https://github.com/dimascapella" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="px-4 mt-3 icons" href="https://www.instagram.com/dimascapella/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-lg">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <Link to="/webFramework" className="nav-link color-orange">My Bio</Link>
                </li>
                <li class="nav-item">
                  <Link to="/webFramework/project" className="nav-link color-orange">My Project</Link>
                </li>
              </ul>
            </div>
          </div>
          <Route path="/webFramework" exact component={bio} />
          <Route path="/webFramework/project" component={project} />
        </div>
      </Router>
    </div>
  )
}

export default App;
