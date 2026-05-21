import "./Hero.css";

import cloud1 from "/9.png";
import cloud2 from "/10.png";
import cloud3 from "/11.png";
import cloud4 from "/12.png";
import cloud5 from "/13.png";
import cloud6 from "/14.png";
import cloud7 from "/15.png";
import cloud8 from "/16.png";

import plane from "/plane.png";

import { useEffect, useRef } from "react";

export default function Hero() {

  const heroRef = useRef(null);

  useEffect(() => {

    const CONFIG = {
      scrollRange: 1.5,
      smoothing: 0.13,

      maxOpacity: [0.5, 0.6, 0.7, 0.35],

      initialOffsets: [
        { x: 0, y: -120 },
        { x: -150, y: -80 },
        { x: 150, y: -60 },
        { x: 0, y: -140 }
      ],

      scales: [1.1, 1.05, 1.0, 1.15],
      blurs: [2, 1, 0, 0],
    };

    let scrollProgress = 0;
    let currentProgress = 0;

    const hero = heroRef.current;

    const cloudLayers = document.querySelectorAll(".cloud-layer");
    const heroContent = document.querySelector(".hero-content");

    let heroHeight = hero.offsetHeight;

    function onScroll() {
      const scrollY =
        window.pageYOffset || document.documentElement.scrollTop;

      const maxScroll = heroHeight * CONFIG.scrollRange;

      scrollProgress = Math.min(scrollY / maxScroll, 1);
    }

    function animate() {

      currentProgress +=
        (scrollProgress - currentProgress) * CONFIG.smoothing;

      updateCloudLayers(currentProgress);
      updateContent(currentProgress);

      requestAnimationFrame(animate);
    }

    function updateCloudLayers(progress) {

      cloudLayers.forEach((layer, i) => {

        const speed =
          parseFloat(layer.dataset.speed) || 0.3;

        const offset = CONFIG.initialOffsets[i];
        const maxOpacity = CONFIG.maxOpacity[i];
        const baseScale = CONFIG.scales[i];
        const baseBlur = CONFIG.blurs[i];

        const easedProgress =
          easeOutCubic(progress);

        const currentX =
          offset.x * easedProgress * speed * 2;

        const currentY =
          offset.y * easedProgress * speed * 2;

        const currentScale =
          baseScale + (progress * 0.05 * speed);

        const currentOpacity =
          maxOpacity * (1 - progress * 1.2);

        const currentBlur =
          baseBlur * (1 - progress * 0.3);

        layer.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0)
           scale(${currentScale})`;

        layer.style.opacity = currentOpacity;

        layer.style.filter =
          `blur(${currentBlur}px)`;
      });
    }

    function updateContent(progress) {

      const contentY = progress * -30;

      const contentOpacity =
        Math.max(0, 1 - progress * 1.2);

      if (heroContent) {
        heroContent.style.opacity = contentOpacity;
        heroContent.style.transform =
          `translateY(${contentY}px)`;
      }
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function handleMouseMove(e) {

      const plane =
        document.querySelector(".hero-plane");

      if (!plane) return;

      const x =
        (window.innerWidth / 2 - e.clientX) / 40;

      const y =
        (window.innerHeight / 2 - e.clientY) / 40;

      plane.style.transform =
        `translate(${x}px, ${y}px)`;
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", handleMouseMove);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (

    <section className="hero" id="hero" ref={heroRef}>

      {/* Clouds */}

      <div
        className="cloud-layer cloud-layer-1"
        data-speed="0.7"
      >
        <img src={cloud1} alt="" className="cloud-img" />
        <img src={cloud2} alt="" className="cloud-img cloud-img-mirror" />
      </div>

      <div
        className="cloud-layer cloud-layer-2"
        data-speed="0.9"
      >
        <img src={cloud3} alt="" className="cloud-img" />
        <img src={cloud4} alt="" className="cloud-img cloud-img-mirror" />
      </div>

      <div
        className="cloud-layer cloud-layer-3"
        data-speed="1.2"
      >
        <img src={cloud5} alt="" className="cloud-img" />
        <img src={cloud6} alt="" className="cloud-img cloud-img-mirror" />
      </div>

      <div
        className="cloud-layer cloud-layer-4"
        data-speed="1.5"
      >
        <img src={cloud7} alt="" className="cloud-img" />
        <img src={cloud8} alt="" className="cloud-img cloud-img-mirror" />
      </div>

      {/* Hero Content */}

      <div className="hero-content">

        <h1 className="hero-title">
          تيربو ترافل - رحلتك تبدأ
          <span> هنا</span>
        </h1>

        <p className="hero-subtitle">
          رحلات استثنائية تأخذك إلى أجمل الوجهات حول العالم
        </p>

        <div className="hero-buttons">

          <a href="#" className="btn btn-primary">
            احجز رحلتك
          </a>

          <a href="#" className="btn btn-secondary">
            استفسر
          </a>

        </div>

        {/* Plane */}

        <div className="plane-wrapper">
          <img
            src={plane}
            alt="Plane"
            className="hero-plane"
          />
        </div>

      </div>

    </section>
  );
}