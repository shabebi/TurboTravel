import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* LOCATION */}
        <div className="footer-col">
          <h3>موقعنا وبيانات التواصل</h3>
          <p>خورمكسر - شارع المطار الرئيسي المدينة البيضاء</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>تواصل معنا</h3>
          <p>785060050</p>
          <p>785060060</p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <div className="footer-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>

      </div>

        <div className="footer-copy">
          جميع الحقوق محفوظة © تيربو ترافل
        </div>
    </footer>
  );
}