import Image from "next/image";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <Image src="/icon/logo.svg" width={60} height={60} alt="LOGO" />
            </a>
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
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <Menu />
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    Games
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    Rewards
                  </a>
                </li>

                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    Discover
                  </a>
                </li>
                <li className="nav-item my-auto me-lg-20">
                  <a className="nav-link" href="#">
                    Global Rank
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    href="./src/sign-in.html"
                    role="button"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
