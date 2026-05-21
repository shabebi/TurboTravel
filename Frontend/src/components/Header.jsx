import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header-wrapper">

      <div className="header">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Right Side */}
        <div className="right">

          <nav className="nav">
            <a href="#contact">تواصل معنا</a>
            <a href="#services">خدماتنا</a>
          </nav>

          <button className="btn">
            الرئيسية
          </button>

        </div>

      </div>

    </header>
  );
}