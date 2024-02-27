// import Image from 'next/image'
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import "bootstrap/dist/css/bootstrap.min.css";


export default class extends Component {
  static async getInitialProps() {
    const res = await fetch("https://random.dog/woof.json?filter=mp4,webm");
    const data = await res.json();

    
  return {
          imageURL:data.url
         };
       }
    
    
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Pricing Website</h1>
        <p className="fs-5 text-muted text-center">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It is built with default Bootstrap
          components and utilities with little customization.
        </p>

        <nav className="d-flex justify-content-center mt-4">
          <a className="me-3 text-dark text-decoration-none" href="#">
            Features
          </a>
          <a className="me-3 text-dark text-decoration-none" href="#">
            Enterprise
          </a>
          <a className="me-3 text-dark text-decoration-none" href="#">
            Support
          </a>
          <a className="text-dark text-decoration-none" href="#">
            Pricing
          </a>
        </nav>

        <div className="row row-cols-1 row-cols-md-3 mt-5 text-center">
          {/* Free Plan */}
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-outline-primary w-100">
                  Sign up for free
                </button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="col mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $15<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-primary w-100">Get started</button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col mb-4">
            <div className="card h-100 border-primary">
              <div className="card-header bg-primary text-white">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-primary w-100">Contact us</button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mt-5">Compare plans</h2>

        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h3 className="card-title text-muted text-uppercase text-center">
                  Free
                </h3>
                {/* Plan details */}
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check me-2 text-success"></i>Single
                    User
                  </li>
                  <li>
                    <i className="fas fa-check me-2 text-success"></i>5GB
                    Storage
                  </li>
                  <li>
                    <i className="fas fa-check me-2 text-success"></i>Unlimited
                    Public Projects
                  </li>
                  <li>
                    <i className="fas fa-check me-2 text-success"></i>Community
                    Access
                  </li>
                  <li className="text-muted">
                    <i className="fas fa-times me-2"></i>Unlimited Private
                    Projects
                  </li>
                  <li className="text-muted">
                    <i className="fas fa-times me-2"></i>Dedicated Phone Support
                  </li>
                  <li className="text-muted">
                    <i className="fas fa-times me-2"></i>Free Subdomain
                  </li>
                  <li className="text-muted">
                    <i className="fas fa-times me-2"></i>Monthly Status Reports
                  </li>
                </ul>
                <button className="btn btn-primary w-100">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
