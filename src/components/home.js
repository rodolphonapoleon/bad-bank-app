import Card from "../context";
import banner from "../bank.png";
import belfoto from "../belpic.jpg";
import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context";
import LoginButton from "./loginbutton";
import pic1 from "../pic1.jpg";
import pic2 from "../pic2.jpg";
import pic3 from "../pic3.jpg";

function Home() {
  const ctx = useContext(UserContext);
  return (
    <>
      <div className="text-end text-uppercase">{ctx.users[0].name}</div>
      <Row>
        <Col className="text-end">
          <LoginButton />
        </Col>
      </Row>

      <div className="row g-0 mt-3">
        <div className="col-lg-6 bg-primary">
          <Row className="justify-content-center mt-4">
            <Col md={8} className="text-center text-white mt-2 mb-4">
              <div>
                <h2 className="">Welcome to BadBank</h2>
                <h5>The best online banking in US</h5>
              </div>
            </Col>
            <Col md={8} className="text-center mb-2">
              <Image src={banner} className="image-test" alt="Bank image" />
            </Col>
          </Row>
        </div>
        <div className="col-lg-6">
          <Image src={belfoto} className="img-fluid" alt="image" />
        </div>
      </div>
      <div className="card text-center border-0 shadow-sm">
        <h5 className="card-header fs-1">
          A bank that lets you start saving online
        </h5>
        <div className="card-body my-4">
          {ctx.log ? (
            <h5 className="card-title fs-4">Best choice ever</h5>
          ) : (
            <h5 className="card-title fs-4">Choose smarter</h5>
          )}
          <p className="card-text mx-5">
            Along with a competitive, variable rate and no monthly maintenance
            fees, BadBank comes with tools to help grow your money faster. We
            found people have saved, on average, 2x more when they’ve used our
            smart savings tools.
          </p>
          {ctx.log ? (
            ""
          ) : (
            <Link
              to="/createaccount"
              className="btn btn-primary rounded-pill fs-5 px-3"
            >
              Open an Account
            </Link>
          )}
        </div>
      </div>

      <div className="text-center fs-2 mt-5">
        Online banking is changing the industry
      </div>

      <div className="row my-4 g-4">
        <div className="col-lg-4">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ width: "18rem", margin: "0 auto" }}
          >
            <img
              src={pic2}
              className="card-img-top"
              alt="music event project"
            />
            <div
              className="card-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h5 className="card-title">
                How Online-Only Banks Stack up Against Traditional Institutions
              </h5>
              <p className="card-text" style={{ flex: 1 }}>
                <small>By BRIAN BEERS, Reviewed by EBONY HOWARD</small>
                <br />
                <br />
                Figuring out where to bank starts with a decision about the type
                of institution you want. Do you prefer a bank with
                brick-and-mortar branches...
              </p>
              <p className="text-end">
                <a
                  href="https://www.investopedia.com/articles/pf/11/benefits-and-drawbacks-of-internet-banks.asp"
                  className="text-primary mt-3"
                  target="_blank"
                >
                  Continue reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ width: "18rem", margin: "0 auto" }}
          >
            <img
              src={pic3}
              className="card-img-top"
              alt="music event project"
            />
            <div
              className="card-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h5 className="card-title">5 Benefits Of Digital Banking</h5>
              <p className="card-text" style={{ flex: 1 }}>
                <small>By MITCH STROHM</small>
                <br />
                <br />
                The global pandemic may have brought the significance of digital
                banking platforms to the surface, but mobile and online banking
                aren’t new. “The pandemic has merely accelerated a phenomenon
                that...
              </p>
              <p className="text-end">
                <a
                  href="https://www.forbes.com/advisor/banking/benefits-of-digital-banking/"
                  className="text-primary mt-3"
                  target="_blank"
                >
                  Continue reading
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ width: "18rem", margin: "0 auto" }}
          >
            <img
              src={pic1}
              className="card-img-top"
              alt="music event project"
            />
            <div
              className="card-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h5 className="card-title">
                e-Banking Adoption: An Opportunity for Customer Value
                Co-creation
              </h5>
              <p className="card-text" style={{ flex: 1 }}>
                <small>By Rocio Carranza, Estrella Diaz, Carlos Sanchez</small>
                <br />
                <br />
                The development of information and communication technologies
                offers innovative opportunities to establish business strategies
                focused...
              </p>
              <p className="text-end">
                <a
                  href="https://www.frontiersin.org/articles/10.3389/fpsyg.2020.621248/full"
                  className="text-primary mt-3"
                  target="_blank"
                >
                  Continue reading
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
