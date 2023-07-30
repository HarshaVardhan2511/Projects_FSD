import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartProducts }) {
    var total = 0;

    if (cartProducts && Array.isArray(cartProducts)) {
        cartProducts.map((product) => (total = total + product.item.cost));
    }

    return (
        <div>
            <div className="container row" style={{ margin: "auto" }}>
                {cartProducts &&
                    cartProducts.map((product) => (
                        <div className="col-4">
                            <div className="card border-0">
                                <img
                                    src={product.item.pic}
                                    className="card-img-top"
                                    style={{ height: "290px", width: "300px", margin: "auto" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.item.name}</h5>
                                    <p className="card-text">
                                        {product.item.dis}
                                    </p>
                                    <h2>Price: {product.item.cost}</h2>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary">
                                            +
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            {product.quantity}
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="jumbotron" style={{ padding: "auto" }}>
                <h3 className="display-4">Total Cart Price: {total} Rs</h3>
                <Link className="btn btn-primary btn-lg" role="button">Make Payment</Link>
            </div>
        </div>
    );
}
