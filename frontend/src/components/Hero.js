import React from 'react';

function Hero() {
  return (
    <>
      {/* ================= MAIN HERO ================= */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-md-6">
              <h1 className="fw-bold mb-4 display-5">
                Build <span className="text-primary">Real-World Projects</span>
                <br />
                With Serious Developers
              </h1>

              <p className="text-muted fs-5">
                DevCollab is where developers collaborate on
                production-ready projects — not fake college demos.
                Learn architecture, teamwork, and real workflows.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary btn-lg px-4">
                  Start Building
                </button>

                <button className="btn btn-outline-secondary btn-lg px-4">
                  Explore Projects
                </button>
              </div>

              {/* STATS */}
              <div className="d-flex gap-5 mt-5">
                <div>
                  <h4 className="fw-bold mb-0">100+</h4>
                  <small className="text-muted">Developers</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">25+</h4>
                  <small className="text-muted">Live Projects</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">Industry</h4>
                  <small className="text-muted">Practices</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://illustrations.popsy.co/gray/work-from-home.svg"
                alt="collaboration"
                className="img-fluid"
              />
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h2 className="fw-bold mb-3">
            Why Developers Choose DevCollab
          </h2>

          <p className="text-muted mb-5">
            Because companies don’t hire based on tutorials —
            they hire based on how you build.
          </p>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h5 className="fw-bold">🧠 Industry Thinking</h5>
                <p className="text-muted mt-2">
                  Understand how real teams plan features,
                  structure code, and ship scalable software.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h5 className="fw-bold">⚙ Real Tech Stack</h5>
                <p className="text-muted mt-2">
                  Build using modern stacks like MERN,
                  authentication, APIs, and clean architecture.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h5 className="fw-bold">📂 Portfolio Ready</h5>
                <p className="text-muted mt-2">
                  Projects that actually make sense
                  in interviews and resumes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              What You’ll Actually Build
            </h2>
            <p className="text-muted">
              Not toy apps — real systems used by real users.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">📊 SaaS Dashboards</h5>
                <p className="text-muted">
                  Authentication, role-based access,
                  data visualization, and admin panels —
                  the kind companies expect you to know.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">🛒 Scalable Web Apps</h5>
                <p className="text-muted">
                  End-to-end apps with frontend,
                  backend, APIs, databases, and deployments.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">🔐 Auth & Security</h5>
                <p className="text-muted">
                  Login systems, protected routes,
                  JWT, permissions — not just UI screens.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">🤝 Team Workflows</h5>
                <p className="text-muted">
                  Git collaboration, code reviews,
                  task breakdown, and version control.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h2 className="fw-bold mb-3">
            Who Is DevCollab For?
          </h2>

          <p className="text-muted mb-5">
            If you relate to any of these — you belong here.
          </p>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h6 className="fw-bold">🎓 Students</h6>
                <p className="text-muted">
                  Who want more than college assignments
                  and actually want to learn industry skills.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h6 className="fw-bold">💻 Self-Taught Devs</h6>
                <p className="text-muted">
                  Who are tired of tutorials
                  and want real project experience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded h-100 shadow-sm">
                <h6 className="fw-bold">🚀 Career Switchers</h6>
                <p className="text-muted">
                  Who need practical experience
                  to break into the tech industry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
