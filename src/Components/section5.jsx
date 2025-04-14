import React from 'react';

const Section5 = () => {
  return (
    <div
      id="scrollspyHeading5"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      tabIndex="0"
      className="scrollspy-example"
    >
      <div className="container">
        <div
          className="row justify-content-center d-flex align-items-end"
          style={{ minHeight: '200px' }}
        >
          <h2
            className="text-center pt-5 pb-4"
            style={{ color: '#355592', fontWeight: 'bold' }}
          >
            CONTACT US
          </h2>
        </div>
        <div className="row justify-content-center d-flex align-items-end pb-5">
          <div className="row justify-content-center d-flex align-items-end">
            <hr className="hrstyle" />
          </div>
          <h6 className="text-center col-8 pt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            beatae officiis iusto voluptatem. Enim, delectus cupiditate obcaecati
            nemo optio harum quisquam aspernatur nihil illum dicta!
          </h6>
        </div>
        <div className="row pt-3 justify-content-center pb-3">
          <div className="col-8 col-lg-6">
            <div className="row">
              <div className="mb-3 col-6">
                <label
                  htmlFor="mobileNumber"
                  className="form-label contactinput3"
                >
                  Mobile Number
                </label>
                <input
                  className="form-control contactinput1 p-2"
                  id="mobileNumber"
                  placeholder="+123 456 789 5522"
                />
              </div>
              <div className="mb-3 col-6">
                <label
                  htmlFor="emailAddress"
                  className="form-label contactinput3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control contactinput1 p-2"
                  id="emailAddress"
                  placeholder="test@test.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <span className="boldcard2">Make An Appointment</span>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control contactinput2 p-2"
                id="yourName"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="form-control contactinput2 p-2"
                id="yourEmail"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="form-control contactinput2"
                id="yourMessage"
                placeholder="Your Message"
                rows="6"
              ></textarea>
            </div>
            <div className="justify-content-end d-flex mb-3">
              <button
                type="button"
                style={{ backgroundColor: '#355592' }}
                className="btn btn-primary text-center hometext2 buttontext"
              >
                Send Us
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-10 pb-4 justify-content-center d-flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274930820468!2d-70.5610547234545!3d41.45495199180073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1742408986552!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;