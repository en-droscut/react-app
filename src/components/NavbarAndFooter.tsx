import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FcFullTrash } from "react-icons/fc";
import { BiDumbbell } from "react-icons/bi";
import Home from "./Home";
import Practice from "./Practice/Practice";
import Footer from "./Footer";

function NavbarAndFooter() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <BiDumbbell size={50} />
            </Link>

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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/practice">
                    <FcFullTrash size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default NavbarAndFooter;
