import React from "react";
import { NavLink } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const menuItems = [
  {
    name: "Home",
    path: "/",
    description: "Home page of the website application",
  },
  {
    name: "Create Account",
    path: "createaccount",
    description: "A form to create new account",
  },
  {
    name: "Deposit",
    path: "deposit",
    description: "A form to deposit money to your account",
  },
  {
    name: "Withdraw",
    path: "withdraw",
    description: "A form to withdraw money from your account",
  },
  {
    name: "All Data",
    path: "alldata",
    description: "Information about all clients of the bank. ",
  },
];

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid ms-5">
          <NavLink to="/" className="navbar-brand fs-2 fw-bold">
            Bad<span className="text-primary">Bank</span>
          </NavLink>
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
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <div className="navbar-nav nav-pills">
              {menuItems.map((item, index) => (
                <OverlayTrigger
                  key={index}
                  placement="bottom"
                  overlay={<Tooltip>{item.description}</Tooltip>}
                >
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fs-4 ms-3 active"
                        : "nav-link fs-4 ms-3"
                    }
                  >
                    {item.name}
                  </NavLink>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
