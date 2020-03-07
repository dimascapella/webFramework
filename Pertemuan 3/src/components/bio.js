import React, { Component } from 'react';

export default class bio extends Component {
  render() {
    return (
      <div className="bio">
        <div className="row mt-5">
          <div className="col-lg-4">
            <h3 className="font-weight-bold">
              My Journey
              <hr className="borderBT-orange" />
            </h3>
          </div>
          <div className="col-lg-8 mt-3">
            <h5>
              I am just a beginner in the world of IT, at the beginning of my collage year, I didn't understand anything given by the lecturer.
              in the second year of college, I joined of social media programming groups to get a lot of knowlegde in programming. In this time, i learn many programming language like CI, ReactJS, Python, C#, Java.
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <h3 className="font-weight-bold">
              My Skill
              <hr className="borderBT-orange" />
            </h3>
          </div>
          <div className="col-lg-8 mt-3">
            <div className="row">
              <div className="col-lg">
                <h5>PHP ( Native and CodeIgniter )</h5>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning width-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg mt-3">
                <h5>JavaScript ( ReactJs )</h5>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning width-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg mt-3">
                <h5>Java</h5>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning width-60" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg mt-3">
                <h5>C# and Python</h5>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-warning width-20" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
