import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Gallery({ productItems, handleAddToCart }) {
  return (
    <div>
      <Carousel style={{ margin: "20px" }}>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/5650050/pexels-photo-5650050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            style={{ height: 550 }}
            alt="one"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/7375091/pexels-photo-7375091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            style={{ height: 550 }}
            alt="two"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            style={{ height: 550 }}
            alt="three"
          />
        </Carousel.Item>
      </Carousel>
      <div className="container row" style={{ margin: "auto" }}>
        {productItems.map((product) => (
          <div className="card col-6 border-0" style={{ width: "13rem", margin: 20 }} key={product.id}>
            <img
              src={product.pic}
              className="card-img-top"
              style={{ height: 200 }}
              alt="..."
            />
            <div className="card-body" style={{ padding: 15, border: 0 }}>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.dis}
              </p>
              <Link to="#" className="btn btn-warning">
                {product.cost}
              </Link>
              <button
                to="#"
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}
                style={{ margin: 15 }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
