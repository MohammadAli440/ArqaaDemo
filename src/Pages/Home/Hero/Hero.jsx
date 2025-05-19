import React, { useEffect, useRef } from "react";
import { Bg, Bg2, HeroText, Product, Product2 } from "../../../images";
import Buttons from "../../../Components/Buttons/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const productSectionRef = useRef(null);
  const swiperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heroContent = heroContentRef.current;
    const productSection = productSectionRef.current;
    const swiper = swiperRef.current;
    const text = textRef.current;

    gsap.fromTo(section, { opacity: 0 }, {
      opacity: 1, duration: 1,
      scrollTrigger: { trigger: section, start: "top center" }
    });

    gsap.fromTo(heroContent, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: heroContent, start: "top 80%" }
    });

    gsap.fromTo(productSection, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: productSection, start: "top 85%" }
    });

    gsap.fromTo(swiper, { opacity: 0, scale: 0.9 }, {
      opacity: 1, scale: 1, duration: 1,
      scrollTrigger: { trigger: swiper, start: "top 85%" }
    });

    gsap.fromTo(text, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: text, start: "top 85%" }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
        }} />

        <div ref={heroContentRef} className="relative z-10 flex flex-col gap-3 items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-14 lg:py-16">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-[#000] mb-3">
            WELCOME TO ARQAA MULTIPACK SOLUTION
          </h2>

          <div className="w-full max-w-xl mb-8">
            <img src={HeroText} alt="Superior Packaging for Premium Products" className="w-full h-auto" />
          </div>

          <div className="mb-8 flex gap-6">
            <Link to="/services"><Buttons buttonText="Explore Services" /></Link>
          </div>
        </div>

        <div ref={productSectionRef} className="relative w-full min-h-[300px] bg-[#434E24]">
          <div className="absolute inset-0 w-full h-full" style={{
            backgroundImage: `url(${Bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }} />

          <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16">
            <div ref={swiperRef} className="w-full max-w-4xl mb-6">
              <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} className="w-full">
                <SwiperSlide>
                  <img src={Product} alt="Main Product" className="w-full h-auto object-contain" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Product2} alt="Main Product 2" className="w-full h-auto object-contain" />
                </SwiperSlide>
              </Swiper>
            </div>

            <p ref={textRef} className="text-center text-white text-lg md:text-xl max-w-3xl mx-auto">
              MultiColor Printing Services | UV, Drip Off UV, Varnish and Textured UV | Box manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
