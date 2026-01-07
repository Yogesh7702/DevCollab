import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          {/* BRAND */}
          <div className="col-md-4">
            <h5 className="fw-bold">DevCollab</h5>
            <p className="text-light opacity-75 mt-2">
              A platform for developers to collaborate,
              build real-world projects, and grow with
              industry-level experience.
            </p>
          </div>

          {/* LINKS */}
          <div className="col-md-2">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="col-md-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Community
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-md-3">
            <h6 className="fw-bold">Get Started</h6>
            <p className="text-light opacity-75 mt-3">
              Join developers building
              real products together.
            </p>
            <button className="btn btn-outline-light btn-sm mt-2">
              Join DevCollab
            </button>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="border-secondary my-4" />

        {/* BOTTOM */}
        <div className="text-center text-light opacity-75">
          <small>
            © {new Date().getFullYear()} DevCollab. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
