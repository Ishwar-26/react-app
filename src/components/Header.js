import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        E-commerce
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <NavLink
                            to="/"
                            className="nav-link px-2 link-secondary"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className="nav-link px-2 link-secondary"
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className="nav-link px-2 link-secondary"
                        >
                            Cart
                        </NavLink>
                        <NavLink
                            to="/orders"
                            className="nav-link px-2 link-secondary"
                        >
                            Orders
                        </NavLink>
                    </ul>

                    <div className="col-md-3 text-end">
                        <NavLink
                            to="/login"
                            className="btn btn-outline-primary me-2"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="btn btn-primary"
                        >
                            Register
                        </NavLink>
                    </div>
                </header>
            </div>
        </div>
    )
}
