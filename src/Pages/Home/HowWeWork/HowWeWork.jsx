import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../../../assets/icon/Arrow.svg";
import { Paintbrush, Package, CheckCircle, Truck } from "lucide-react";
import Buttons from "../../../Components/Buttons/Buttons";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Design Customization",
    description: "Collaborate with our design experts to bring your vision to life with precision and creativity.",
    icon: <Paintbrush className="w-10 h-10 text-white" />
  },
  {
    id: 2,
    title: "Premium Materials",
    description: "Select from our curated collection of high-quality materials for exceptional packaging solutions.",
    icon: <Package className="w-10 h-10 text-white" />
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Experience meticulous quality control and expert craftsmanship in every production phase.",
    icon: <CheckCircle className="w-10 h-10 text-white" />
  },
  {
    id: 4,
    title: "Fast Delivery",
    description: "Get your custom packaging solutions delivered on time with our efficient logistics network.",
    icon: <Truck className="w-10 h-10 text-white" />
  },
];

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const cards = stepRefs.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-8 bg-[#F5F2EE]"
    >
      <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
          <h2 className="text-5xl font-bold text-[#434E24] mb-4">
          How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we transform your ideas into exceptional packaging solutions through our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={el => (stepRefs.current[idx] = el)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-3xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#434E24] to-[#5a6b32] rounded-3xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {step.icon}
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-bold text-[#434E24] opacity-90">
                      {step.id < 10 ? `0${step.id}` : step.id}
                    </span>
                    <h3 className="text-xl font-bold text-[#434E24]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
        <Buttons buttonText="View More"/>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
