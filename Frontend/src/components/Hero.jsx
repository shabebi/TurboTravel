import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>تيربو ترافل - رحلتك تبدأ هنا</h1>

        <div className="hero-buttons">
          <button className="btn-primary">احجز رحلتك</button>
          <button className="btn-outline">استفسر</button>
        </div>
        <div className="plane-wrapper">
          <img src={`${import.meta.env.BASE_URL}plane.png`} alt="plane" className="hero-plane" />
        </div>
      </div>
    </section>
  );
}