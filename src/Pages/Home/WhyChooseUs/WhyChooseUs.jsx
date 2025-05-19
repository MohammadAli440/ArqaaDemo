import { useEffect, useRef } from 'react';
import { Shield, Users, Zap, Award, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image1 } from '../../../images';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, description, index, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="bg-white p-6 rounded-xl flex flex-col gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-[#434E24] font-semibold flex items-center gap-2 hover:text-[#2E3B09] transition-colors">
        Read More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const cards = cardsRef.current;

    // Animate section entrance
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Animate image
    gsap.fromTo(
      image,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
        },
      }
    );

    // Animate cards
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-[#434E24]" />,
      title: 'High-Quality Printing',
      description: 'Premium materials and state-of-the-art printing technology for exceptional results.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#434E24]" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in the printing industry.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#434E24]" />,
      title: 'Fast Turnaround',
      description: 'Quick and efficient service without compromising on quality.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#434E24]" />,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee on all our printing services.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-[#F5F2EE]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#434E24] flex items-center justify-center text-center mb-8" >
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mb-14 mx-auto">
          Experience excellence in printing with our commitment to quality, expertise, and customer satisfaction. We deliver exceptional results that make your brand stand out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div ref={imageRef} className="rounded-2xl overflow-hidden">
            <img
              src={Image1}
              alt="Printing Services"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                index={index}
                cardRef={(el) => (cardsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
