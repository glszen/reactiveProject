import React, { useState } from 'react';

const classes = [
  {
    id: 1,
    title: 'Yoga',
    img: '../images/yoga.jpg',
    desc: `
      <h3 class="textc" style="font-weight: bold;">Why are your Yoga?</h3>
      <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
    `,
  },
  {
    id: 2,
    title: 'Group',
    img: '../images/group.webp',
    desc: `
      <h3 class="textc" style="font-weight: bold;">Why are your Group?</h3>
      <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
    `,
  },
  {
    id: 3,
    title: 'Solo',
    img: '../images/solo.jpg',
    desc: `
      <h3 class="textc" style="font-weight: bold;">Why are your Solo?</h3>
      <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
    `,
  },
  {
    id: 4,
    title: 'Stretching',
    img: '../images/stret.webp',
    desc: `
      <h3 class="textc" style="font-weight: bold;">Why are your Stretching?</h3>
      <p class="textc" style="font-weight: bold;">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
    `,
  },
];

const Section2 = () => {
  const [selectedClass, setSelectedClass] = useState('Yoga');

  const filterClasses = (className) => {
    setSelectedClass(className);
  };

  const activeClass = classes.find((item) => item.title === selectedClass);

  return (
    <>
      <div
        className="row justify-content-center pt-4 pb-5"
        style={{ minHeight: '9vw', width: 'auto', backgroundColor: 'aliceblue' }}
      >
        <div className="col-12 col-lg-2 gap-4 pt-3 justify-content-center d-flex">
          <div className="borderback p-4">
            <h5 className="bolder" style={{ color: '#355592' }}>
              325
            </h5>
            <h6 className="pt-3 bolder">Course</h6>
          </div>
        </div>

        <div className="col-12 col-lg-2 gap-4 pt-3 justify-content-center d-flex">
          <div className="borderback p-4">
            <h5 className="bolder" style={{ color: '#355592' }}>
              405
            </h5>
            <h6 className="pt-3 bolder">Work Out</h6>
          </div>
        </div>

        <div className="col-12 col-lg-2 gap-4 pt-3 justify-content-center d-flex">
          <div className="borderback p-4">
            <h5 className="bolder" style={{ color: '#355592' }}>
              305
            </h5>
            <h6 className="pt-3 bolder">Working Hour</h6>
          </div>
        </div>

        <div className="col-12 col-lg-2 pt-3 justify-content-center d-flex">
          <div className="borderback p-4">
            <h5 className="bolder" style={{ color: '#355592' }}>
              705
            </h5>
            <h6 className="pt-3 bolder">Happy Client</h6>
          </div>
        </div>
      </div>

      <div
        id="scrollspyHeading2"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        tabIndex="0"
        className="minimalistback scrollspy-example justify-content-center d-flex"
        style={{ minHeight: '950px' }}
      >
        <div className="col-10">
          <div
            className="row justify-content-center d-flex align-items-end"
            style={{ minHeight: '200px' }}
          >
            <h2
              className="text-center pt-5 pb-4"
              style={{ color: '#355592', fontWeight: 'bold' }}
            >
              OUR CLASSES
            </h2>
          </div>
          <div className="row justify-content-center d-flex align-items-end">
            <div className="row justify-content-center d-flex align-items-end">
              <hr className="hrstyle" />
            </div>
            <h6 className="text-center col-8 pt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              beatae officiis iusto voluptatem. Enim, delectus cupiditate
              obcaecati nemo optio harum quisquam aspernatur nihil illum dicta!
            </h6>
          </div>

          <div id="myDIV" className="col-xl-12 col-12">
            <div className="row justify-content-center pt-3">
              {classes.map((item) => (
                <button
                  key={item.id}
                  className={`button col-4 col-xl-1 ${
                    selectedClass === item.title ? 'active' : ''
                  }`}
                  onClick={() => filterClasses(item.title)}
                  style={{ fontWeight: 500 }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="col-12 justify-content-center d-flex pt-5">
              {activeClass && (
                <div className="row justify-content-center">
                  <div className="col-10 col-lg-5">
                    <div
                      dangerouslySetInnerHTML={{ __html: activeClass.desc }}
                    />
                  </div>
                  <div className="col-11 justify-content-center d-flex col-lg-5">
                    <img
                      src={activeClass.img}
                      alt={activeClass.title}
                      className="img"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;