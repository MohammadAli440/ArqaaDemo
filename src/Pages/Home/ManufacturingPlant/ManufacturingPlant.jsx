import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Printer,
  Scissors,
  Paintbrush,
  Droplet,
  Layers,
  Stamp,
  ScissorsIcon,
  Boxes,
} from "lucide-react";
import Buttons from "../../../Components/Buttons/Buttons";

gsap.registerPlugin(ScrollTrigger);

const ManufacturingPlant = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Printer className="w-6 h-6" />,
      text: "5-Color Printing: Sharp, vibrant packaging prints",
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      text: "Cutting: Precise sheet trimming",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      text: "UV & Coating: Gloss, matte, textured effects",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      text: "Varnish: Protective clear finish",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      text: "Lamination: Glossy, matte, velvet touch",
    },
    {
      icon: <Stamp className="w-6 h-6" />,
      text: "Punching & Foil: Die-cuts, embossing, metallic foils",
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      text: "Pasting: Fast box folding & gluing",
    },
    {
      icon: <ScissorsIcon className="w-6 h-6" />,
      text: "Sticker Cutting: Clean kiss-cut labels",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#434E24] "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Image */}
          <div ref={imageRef} className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/manufacturing-plant.jpg"
                alt="Manufacturing Plant"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={contentRef} className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#fff]">
                Our Manufacturing Excellence
              </h2>
              <p className="text-[#F5F2EE] text-lg">
                Discover our cutting-edge manufacturing facilities where
                innovation meets precision. We combine advanced technology with
                skilled craftsmanship to deliver exceptional packaging
                solutions.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-[#F5F2EE] text-[434E24]">
                    {feature.icon}
                  </div>
                  <p className="text-[#F5F2EE]">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Buttons
                buttonText="Learn More"
                link="/manufacturing"
                variant="primary"
                bgColor="#f5f2ee"
                textColor="#434E24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingPlant;
