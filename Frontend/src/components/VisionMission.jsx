import "./VisionMission.css";

export default function VisionMission() {
  return (
    <section className="vision-mission">

      {/* ROW 1 */}
      <div className="vm-row">
        <div className="vm-image">
          <img src="/TurboTravel/7.jpg" alt="vision" />
        </div>

        <div className="vm-text">
          <h2>رؤيتنا</h2>
          <p>
            أن نكون الخيار الأول لخدمات السفر والسياحة في اليمن عبر تقديم خدمات
            موثوقة بمعايير احترافية تضاهي كبرى وكالات السفر الإقليمية.
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="vm-row reverse">
        <div className="vm-image">
          <img src="/TurboTravel/8.jpg" alt="mission" />
        </div>

        <div className="vm-text">
          <h2>رسالتنا</h2>
          <p>
            تسهيل تجربة السفر لعملائنا من خلال توفير حلول مرنة ومتكاملة للحجوزات
            والتأشيرات والبرامج السياحية، مع التزام كامل بالمصداقية والجودة وخدمة
            ما بعد البيع.
          </p>
        </div>
      </div>

    </section>
  );
}