import React, { useState, useEffect } from "react"; //ekran boyutu değiştiğinde belirli şeyleri ekrandan silmek için state SIGN UP yazısı gibi silinmeyen şeyler için useEffect kullanıyoruz
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false); //state ataması yaptık
  const [button, setButton] = useState(true); //butonlar için state ataması

  const handleClick = () => setClick(!click); //tıklanırsa true yapıyor ve tıklanmayı alıyor
  const closeMobileMenu = () => setClick(false); //tıklamayla menünün görünürlüğünü kapıyoruz

  const showButton = () => {
    if (window.innerWidth <= 960) {
      //mobil cihazlarda düzgün gözükmesi için hangi genişlikli cihazda gözükeceğini seçtik
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={
              closeMobileMenu /* mobilde logoya tıklandığında menünün kapanmasını sağladık*/
            }
          >
            EgeGames
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              click ? "nav-menu active" : "nav-menu"
            } /* menu tuşuna bastığımızda menünün ekrandan kalkmasını sağlıyor bu sayede telefon gibi platformlarda menu kullanımını sağlıyor */
          >
            <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ourgames"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Games
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
