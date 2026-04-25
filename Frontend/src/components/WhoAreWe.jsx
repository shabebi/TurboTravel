import "./WhoAreWe.css";

export default function WhoAreWe() {
  return (
    <section className="who">
      <div className="who-shadow">
        <div className="who-card">
          
          {/* RIGHT SIDE (logo) */}
          <div className="who-logo">
            <img src="/TurboTravel/logo.png" alt="logo" />
          </div>

          {/* TEXT */}
          <div className="who-text">
            <h2>من نحن</h2>
            <p>
              تيربو ترافل هو مكتب سفريات وسياحة معتمد مقره مدينة عدن - خورمكسر,
              حي أكتوبر, عمارة البنيان. نعمل على تقديم حلول سفر متكاملة للأفراد
              والشركات, تجمع بين السرعة، الدقة، والأسعار التنافسية مع خدمة عملاء
              احترافية تضمن تجربة سفر مريحة وآمنة من لحظة التخطيط وحتى العودة.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}