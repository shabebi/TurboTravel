import "./Header.css";
import logo from "../assets/logo.jpeg";


export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header">

        {/* Logo (left) */}
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>

        {/* Right side (nav + button together) */}
        <div className="right">
          <nav className="nav">
            <a href="#">خدماتنا</a>
          </nav>

          <button className="btn">الرئيسية</button>
        </div>

      </div>
    </header>
  );
}