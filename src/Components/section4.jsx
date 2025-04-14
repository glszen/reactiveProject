import React from 'react';

const Section4 = () => {
  return (
    <>
      <div className="row justify-content-center pt-5">
        <div className="col-lg-8 col-12 justify-content-center">
          <div className="align-items-end" style={{ minHeight: '100px' }}>
            <h2
              className="text-center pb-4"
              style={{ color: '#355592', fontWeight: 'bold' }}
            >
              PURCHASE FROM US
            </h2>
          </div>
          <div className="row justify-content-center d-flex align-items-end">
            <div className="row justify-content-center d-flex align-items-end">
              <hr className="hrstyle" />
            </div>
            <h6 className="text-center col-8 pt-3 pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              beatae officiis iusto voluptatem. Enim, delectus cupiditate.
            </h6>
          </div>
          <div className="row justify-content-center pb-5 g-5 ps-5">
            {[
              {
                img: './images/purchase1.jpg',
                title: 'Kettlebell / 5kg',
                oldPrice: '399,99$',
                newPrice: '299,99$',
              },
              {
                img: './images/purchase2.jpg',
                title: 'Treadmill',
                oldPrice: '899,99$',
                newPrice: '599,99$',
              },
              {
                img: './images/purchase3.jpg',
                title: 'Adjustable Dumbell',
                oldPrice: '699,99$',
                newPrice: '499,99$',
              },
              {
                img: './images/purchase4.jpg',
                title: 'Kettlebell / 3kg',
                oldPrice: '89,99$',
                newPrice: '59,99$',
              },
            ].map((product, index) => (
              <div className="col-sm-7 col-lg-3" key={index}>
                <div className="product-card">
                  <img src={product.img} alt={product.title} />
                  <h5 className="pt-3 text-center">{product.title}</h5>
                  <div className="justify-content-center d-flex">
                    <span
                      className="text-center boldcard"
                      style={{ textDecoration: 'line-through' }}
                    >
                      {product.oldPrice}
                    </span>
                    <span className="text-center p-1 boldcard">/</span>
                    <span className="text-center boldcard">{product.newPrice}</span>
                  </div>
                  <div className="pt-3">
                    <button>
                      <i className="bi bi-cart-fill"></i>
                    </button>
                    <h6
                      className="text-center pe-5 pt-2 col-9"
                      style={{ fontWeight: 'bold' }}
                    >
                      Add To Card
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="scrollspyHeading4"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        tabIndex="0"
        className="scrollspy-example"
        style={{ minHeight: '650px', backgroundColor: 'rgba(241,248,255,255)' }}
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
              REVIEW CLIENT
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

          <div className="row justify-content-center pt-5 ps-5">
            {[
              {
                img: './images/client1.jpg',
                name: 'Diet Expert',
                role: 'CFO',
                review:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos minus exercitationem aliquid earum eaque, ex fugiat praesentium similique temporibus vero ratione dolor cupiditate omnis.',
              },
              {
                img: './images/client2.jpg',
                name: 'Cardio Trainer',
                role: 'CEO',
                review:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos minus exercitationem aliquid earum eaque, ex fugiat praesentium similique temporibus vero ratione dolor cupiditate omnis.',
              },
            ].map((client, index) => (
              <div className="col-12 col-lg-6 pb-4" key={index}>
                <div className="text-start row ps-1">
                  <div className="col-2 col-lg-2 pb-3">
                    <img className="clientimg" src={client.img} alt={client.name} />
                  </div>
                  <div className="col pt-2">
                    <span style={{ fontWeight: 600 }} className="clienttext row">
                      {client.name}
                    </span>
                    <span
                      style={{ fontWeight: 400 }}
                      className="clienttext row pt-1"
                    >
                      {client.role}
                    </span>
                  </div>
                </div>

                <div className="card">
                  <p className="cardtext" style={{ color: 'white' }}>
                    {client.review}
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-10">
                    <div className="triangle"></div>
                  </div>
                  <div className="col justify-content-center d-flex">
                    <div className="triangle2 ms-3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;