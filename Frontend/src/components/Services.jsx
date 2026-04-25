import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "حج وعمرة",
      text: "تنظيم برامج حج وعمرة متكاملة تشمل التذاكر، الإقامة، والتنقل، وفق باقات مناسبة بمستويات مختلفة من الخدمة.",
      img: "/TurboTravel/3.png",
    },
    {
      title: "إصدار التأشيرات السياحية",
      text: "خدمات استخراج تأشيرات لعدة دول، مع متابعة الإجراءات وتقديم الاستشارات المناسبة حسب وجهة السفر.",
      img: "/TurboTravel/2.png",
    },
    {
      title: "حجوزات تذاكر الطيران",
      text: "نوفر حجوزات على مختلف شركات الطيران بأسعار تنافسية وخيارات مرنة تناسب الأفراد والعائلات ورجال الأعمال.",
      img: "/TurboTravel/1.png",
    },
    {
      title: "خدمات للشركات والمؤسسات",
      text: "إدارة سفر الموظفين، حجوزات جماعية، وتنظيم رحلات عمل ومشاركات في المعارض والمؤتمرات.",
      img: "/TurboTravel/6.png",
    },
    {
      title: "البرامج والرحلات السياحية",
      text: "تصميم رحلات سياحية وبرامج ترفيهية مخصصة للأفراد والمجموعات، داخل وخارج اليمن.",
      img: "/TurboTravel/5.png",
    },
    {
      title: "حجز الفنادق",
      text: "حجوزات فندقية في مختلف الوجهات السياحية حول العالم بأسعار تفضيلية وعروض موسمية.",
      img: "/TurboTravel/4.png",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="services-title">خــدمــاتـــــنــا</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>

            <div className="service-image">
              <img src={s.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}