import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px'den fazla kaydırıldığında scrolled true olur
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbarstyle ${scrolled ? 'scrolled' : ''}`}
      id="navbar-example2"
      style={{ position: 'fixed', width: '100%', top: 0, left: 0, right: 0 }}
    >
      <div className="container">
        <img
          src="./images/logo.png"
          style={{ width: '230px', height: 'auto' }}
          alt="logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text navbartext pe-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-5">
              <li className="pe-3">
                <a
                  className="nav-link"
                  style={{ color: 'white' }}
                  aria-current="page"
                  href="#scrollspyHeading1"
                >
                  Home
                </a>
              </li>
              <li className="pe-3">
                <a
                  className="nav-link"
                  style={{ color: 'white' }}
                  href="#scrollspyHeading2"
                >
                  Classes
                </a>
              </li>
              <li className="pe-3">
                <a
                  className="nav-link"
                  style={{ color: 'white' }}
                  href="#scrollspyHeading3"
                >
                  Trainer
                </a>
              </li>
              <li className="pe-3">
                <a
                  className="nav-link"
                  style={{ color: 'white' }}
                  aria-current="page"
                  href="#scrollspyHeading4"
                >
                  Review
                </a>
              </li>
              <li className="pe-3">
                <a
                  className="nav-link"
                  style={{ color: 'white' }}
                  href="#scrollspyHeading5"
                >
                  Contact
                </a>
              </li>
              <ul className="nav nav-pills pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#scrollspyHeading6"
                    style={{ backgroundColor: 'orange', color: 'white' }}
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;