import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Buttons from '../../../Components/Buttons/Buttons';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const iconsRef = useRef([]);

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

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      iconsRef.current.forEach((icon, index) => {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.6 + (index * 0.2),
          ease: "back.out(1.7)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 bg-[#F5F2EE]"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={contentRef}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#434E24]"
          >
            Ready to Transform Your Packaging?
          </h2>
          <p 
            ref={textRef}
            className="text-xl text-gray-600 max-w-2xl"
          >
            Let's discuss how we can help elevate your brand with our premium packaging solutions. 
            Get in touch with us today for a free consultation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div 
              ref={el => (iconsRef.current[0] = el)}
              className="flex items-center gap-2 text-[#434E24] hover:text-[#5a6b32] transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Live Chat</span>
            </div>
            <div 
              ref={el => (iconsRef.current[1] = el)}
              className="flex items-center gap-2 text-[#434E24] hover:text-[#5a6b32] transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>Call Us</span>
            </div>
            <div 
              ref={el => (iconsRef.current[2] = el)}
              className="flex items-center gap-2 text-[#434E24] hover:text-[#5a6b32] transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
            </div>
          </div>

          <div ref={buttonRef}>
            <Buttons 
              buttonText="Contact Us"
              bgColor="#434E24"
              textColor="#F5F2EE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;