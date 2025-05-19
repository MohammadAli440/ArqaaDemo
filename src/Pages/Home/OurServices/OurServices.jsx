import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  CreditCard, 
  FileText, 
  Printer, 
  BookOpen, 
  FolderOpen, 
  Layers 
} from 'lucide-react';
import Buttons from '../../../Components/Buttons/Buttons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Business Cards",
      description: "Professional business cards with premium finishes and custom designs.",
      icon: <CreditCard className="w-12 h-12" />
    },
    {
      id: 2,
      title: "Leaflets & Flyers",
      description: "Eye-catching promotional materials for your marketing campaigns.",
      icon: <FileText className="w-12 h-12" />
    },
    {
      id: 3,
      title: "Printing Stationeries",
      description: "High-quality letterheads, envelopes, and corporate stationery.",
      icon: <Printer className="w-12 h-12" />
    },
    {
      id: 4,
      title: "Brochures & Catalogues",
      description: "Detailed product catalogs and informative brochures.",
      icon: <BookOpen className="w-12 h-12" />
    },
    {
      id: 5,
      title: "Files",
      description: "Custom file folders and document organization solutions.",
      icon: <FolderOpen className="w-12 h-12" />
    },
    {
      id: 6,
      title: "Mix Job Printing",
      description: "Versatile printing solutions for various business needs.",
      icon: <Layers className="w-12 h-12" />
    }
  ];

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
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#434E24] mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of printing and packaging solutions
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-xl bg-[#434E24] text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#434E24]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-12">
          <Buttons
            buttonText="More Services"
            bgColor="#434E24"
            textColor="#F5F2EE"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;