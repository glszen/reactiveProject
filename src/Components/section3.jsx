import React, { useState } from 'react';

const Section3 = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmiCategory, setBMICategory] = useState('');
  const [progress, setProgress] = useState(0);

  const calculatorBMI = () => {
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      alert('Please enter valid height and weight.');
      return;
    }

    const calculatedBMI = (weight / ((height / 100) ** 2)).toFixed(1);
    setBMI(calculatedBMI);

    let category = '';
    if (calculatedBMI < 18.5) {
      category = 'Underweight';
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      category = 'Normal Weight';
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      category = 'Overweight';
    } else if (calculatedBMI >= 30 && calculatedBMI < 35) {
      category = 'Obese';
    } else {
      category = 'Extremely Obese';
    }
    setBMICategory(category);

    const progressPercentage = calculateProgress(calculatedBMI);
    setProgress(progressPercentage);
  };

  const calculateProgress = (bmi) => {
    let progress = 0;
    if (bmi < 18.5) {
      progress = (bmi / 18.5) * 25;
    } else if (bmi >= 18.5 && bmi < 25) {
      progress = 25 + ((bmi - 18.5) / 6.5) * 25;
    } else if (bmi >= 25 && bmi < 30) {
      progress = 50 + ((bmi - 25) / 5) * 25;
    } else if (bmi >= 30 && bmi < 35) {
      progress = 75 + ((bmi - 30) / 5) * 25;
    } else {
      progress = 100;
    }
    return Math.min(progress, 100);
  };

  return (
    <>
      <div className="row justify-content-center pt-5">
        <div className="col-lg-4 col-10 pt-5">
          <h3
            className="text-start pt-3"
            style={{ color: '#355592', fontWeight: 'bold' }}
          >
            BMI CALCULATOR
          </h3>
          <p className="pt-3" style={{ fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consectetur provident voluptatibus iure voluptate aperiam error sunt
            quia laudantium, odit corrupti sed dolor reiciendis voluptatem!
          </p>
          <div className="row justify-content-start pt-3">
            <div className="col-6 align-items-center">
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="imputs"
                type="text"
                placeholder="Your Height"
                aria-label="default input example"
              />
              <span
                className="ps-2"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                cm
              </span>
            </div>
            <div className="col-6 align-items-center">
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="imputs"
                type="text"
                placeholder="Your Weight"
                aria-label="default input example"
              />
              <span
                className="ps-2"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                kg
              </span>
            </div>
            <div className="justify-content-start d-flex pt-5">
              <button
                type="button"
                className="col-4 btn orange border"
                onClick={calculatorBMI}
              >
                Calculate BMI
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12 pt-5">
          <div
            className="text-start ps-4 pb-1"
            style={{ fontWeight: 'bold', fontSize: 'x-large' }}
          >
            YOUR BMI
          </div>
          <img
            src="./images/bmi-index.jpg"
            className="pb-5"
            style={{ maxWidth: '600px' }}
            alt="BMI Index"
          />
          <div className="pb-2 col-8 col-lg-8">
            {bmi && (
              <p>
                Your BMI is: {bmi} ({bmiCategory})
              </p>
            )}
          </div>
          <div className="bmi-progress-container pb-5 col-10 col-lg-10">
            <div
              className="bmi-progress"
              style={{
                width: `${progress}%`,
                height: '20px',
                backgroundColor: 'green',
                transition: 'width 1s ease-in-out',
              }}
            ></div>
          </div>
        </div>
      </div>

      <div
        id="scrollspyHeading3"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        tabIndex="0"
        className="scrollspy-example"
        style={{ minHeight: '720px', backgroundColor: 'rgba(241,248,255,255)' }}
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
              OUR BEST TRAINERS
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

          <div className="row pb-5 grid gap-5 justify-content-center pt-5">
            <div className="trainercontainer col-4">
              <div className="top-border"></div>
              <div className="bottom-border"></div>
              <div className="left-border"></div>
              <div className="right-border"></div>

              <img
                src="./images/trainer1.jpg"
                alt="Avatar"
                className="image border border-warning"
                style={{ borderRadius: '5px' }}
              />

              <div className="overlay pt-1">
                <p className="mt-3" style={{ fontSize: '20px' }}>
                  Nichols Strow
                  <br />
                  <a
                    style={{ textDecoration: 'none', fontSize: '14px' }}
                    href="#"
                  >
                    Pilates Trainer
                  </a>
                </p>
              </div>
            </div>

            <div className="trainercontainer col-4">
              <div className="top-border"></div>
              <div className="bottom-border"></div>
              <div className="left-border"></div>
              <div className="right-border"></div>

              <img
                src="./images/trainer2.jpg"
                alt="Avatar"
                className="image border border-warning"
                style={{ borderRadius: '5px' }}
              />

              <div className="overlay pt-1">
                <p className="mt-3" style={{ fontSize: '20px' }}>
                  Nick Blake
                  <br />
                  <a
                    style={{ textDecoration: 'none', fontSize: '14px' }}
                    href="#"
                  >
                    Fitness Trainer
                  </a>
                </p>
              </div>
            </div>

            <div className="trainercontainer col-4">
              <div className="top-border"></div>
              <div className="bottom-border"></div>
              <div className="left-border"></div>
              <div className="right-border"></div>

              <img
                src="./images/trainer3.jpg"
                alt="Avatar"
                className="image border border-warning"
                style={{ borderRadius: '5px' }}
              />

              <div className="overlay pt-1">
                <p className="mt-3" style={{ fontSize: '20px' }}>
                  Jane Done
                  <br />
                  <a
                    style={{ textDecoration: 'none', fontSize: '14px' }}
                    href="#"
                  >
                    Cardio Trainer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;