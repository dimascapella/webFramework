import React, { Component } from 'react';
import noImage from '../Assets/Image/noimage.png';

export default class project extends Component {
  render() {
    return (
      <div className="project">
        <div className="row">
          <div className="col-lg">
            <h2 className="text-center font-weight-bold">My Project</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-5">
            <div class="card border-orange bg-black">
              <img class="card-img-top" src={noImage} alt="Card cap" />
              <div class="card-body">
                <h4 class="card-text font-weight-bold text-center">Data Management (Website)</h4>
                <p className="mt-3">Simple website for recording all items and income every month</p>
                <a className="float-right" href="https://github.com/dimascapella/Managemen" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <button className="btn btn-warning">
                    Go To Project >>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div class="card border-orange bg-black">
              <img class="card-img-top" src={noImage} alt="Card cap" />
              <div class="card-body">
                <h4 class="card-text font-weight-bold text-center">Data Management (Mobile)</h4>
                <p className="mt-3">Simple application for recording all items</p>
                <a className="float-right" href="https://github.com/dimascapella/Android" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <button className="btn btn-warning">
                    Go To Project >>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
