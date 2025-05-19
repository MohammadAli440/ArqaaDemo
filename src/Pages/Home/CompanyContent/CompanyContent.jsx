import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Truck, Shield, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CompanyContent = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      elementsRef.current.forEach((element, index) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.6 + index * 0.2,
          ease: "back.out(1.7)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const elements = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Quality Packaging",
      description: "Premium materials and expert craftsmanship",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "Quick turnaround and reliable shipping",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Product Safety",
      description: "Secure packaging for your valuable items",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Industry Leader",
      description: "Trusted by businesses worldwide",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#434E24]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#F5F2EE]"
          >
            Arqaa Multipack Solution
          </h1>
          <h2
            ref={subtitleRef}
            className=" text-2xl md:text-3xlfont-semibold text-[#F5F2EE] "
          >
            Custom Packaging for Every Industry
          </h2>
          <p
            ref={contentRef}
            className="text-lg text-[#F5F2EE] max-w-3xl mx-auto leading-relaxed"
          >
            At arqaa multipack Solution, we provide unique, high-quality
            packaging solutions tailored to various industries. Our boxes are
            designed to enhance brand appeal, ensure product safety, and offer
            premium finishing for businesses across multiple sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {elements.map((element, index) => (
              <div
                key={index}
                ref={(el) => (elementsRef.current[index] = el)}
                className="flex flex-col items-center p-6 bg-[#F5F2EE] rounded-xl text-[#434E24] hover:scale-105 transition-transform duration-300"
              >
                {element.icon}
                <h3 className="text-xl font-semibold mt-4">{element.title}</h3>
                <p className="text-center mt-2">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyContent;
