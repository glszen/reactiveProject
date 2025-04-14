import React from 'react';

const Section1 = () => {
  return (
    <div className='background'>

<div
      id="scrollspyHeading1"
      className="col-12 container pt-5 scrollspy-example"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      tabIndex="0"
    >
      <div className="row pt-5">
        <div className="row pt-5">
          <div className="pt-5">
            <button
              type="button"
              style={{ backgroundColor: '#355592' }}
              className="btn btn-primary text-center hometext2 buttontext"
            >
              POWERFULL
            </button>
          </div>
        </div>

        <div className="row pt-1">
          <div className="col-lg-12 col-4">
            <h1 className="hometext">Group</h1>
            <h1 className="hometext">Practice</h1>
            <h1 className="hometext">With Trainer</h1>
          </div>
        </div>

        <div className="row pb-3">
          <div
            className="col-lg-9 col-10 text-start"
            style={{ backgroundColor: 'black', opacity: 0.8 }}
          >
            <p className="hometext2 pt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam corrupti iure, hic quia
              inventore nemo error dicta amet labore excepturi consequatur dolore fuga tempore at
              sint atque debitis vero nesciunt obcaecati distinctio laudantium repellat adipisci et
              asperiores. Tempora rerum, minima minus.
            </p>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-xl-5">
            <button
              type="button"
              className="btn text-center buttontext"
              style={{ backgroundColor: '#355592', maxWidth: '14vh' }}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn text-center border buttontext"
              style={{ backgroundColor: 'transparent', maxWidth: '12vh' }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Section1;