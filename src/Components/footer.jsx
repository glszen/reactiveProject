import React from 'react';

const Footer = () => {
  return (
    <div className="footer row justify-content-center">
      <div className="col-8">
        <img
          src="./images/logo.png"
          alt="Logo"
          style={{ width: '30vw', maxWidth: '180px', minWidth: '100px' }}
        />

        <div className="row">
          <p className="col-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            eius illo maiores aliquam nisi exercitationem iste facilis.
            Provident mollitia ducimus est, autem alias dolore laudantium,
            incidunt nulla, provident mollitia ducimus est, autem alias dolore
            laudantium, incidunt nab quia rem.
          </p>
        </div>

        <div className="justify-content-center d-flex container">
          <div className="row" style={{ width: '85vh' }}>
            <div className="col-6">
              <h4>Information</h4>
              <p>
                <a href="#" className="smalltext">
                  About Us
                </a>
              </p>
              <p>
                <a href="#" className="smalltext">
                  Classes
                </a>
              </p>
              <p>
                <a href="#" className="smalltext">
                  Blog
                </a>
              </p>
              <p>
                <a href="#" className="smalltext">
                  Contact
                </a>
              </p>
            </div>

            <div className="col-6">
              <h4>Helpful Links</h4>
              <p>
                <a href="#" className="smalltext">
                  Services
                </a>
              </p>
              <p>
                <a href="#" className="smalltext">
                  Supports
                </a>
              </p>
              <p>
                <a href="#" className="smalltext">
                  Terms & Condition
                </a>
              </p>
              <p>
                <a href="#" className="smalltext">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;