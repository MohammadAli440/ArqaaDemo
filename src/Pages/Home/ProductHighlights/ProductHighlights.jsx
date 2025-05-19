import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Buttons from '../../../Components/Buttons/Buttons';
import { Package, PackageOpen, Leaf, Factory } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductHighlights = () => {
  const sectionRef = useRef(null);
  const productsRef = useRef([]);

  const products = [
    {
      id: 1,
      title: "Premium Packaging Solutions",
      description: "Our high-quality packaging solutions ensure your products are protected and presented beautifully. Made with sustainable materials and innovative designs.",
      image: "/images/product1.jpg",
      icon: <Package className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Custom Box Designs",
      description: "Create unique packaging that stands out with our custom box designs. Perfect for special occasions and premium products.",
      image: "/images/product2.jpg",
      icon: <PackageOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging solutions that help protect the environment while maintaining quality and durability.",
      image: "/images/product3.jpg",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Industrial Packaging",
      description: "Heavy-duty packaging solutions for industrial applications. Built to withstand the toughest conditions.",
      image: "/images/product4.jpg",
      icon: <Factory className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      productsRef.current.forEach((product, index) => {
        gsap.from(product, {
          scrollTrigger: {
            trigger: product,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#434E24]">
          Our Product Highlights
        </h2>
        
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => productsRef.current[index] = el}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#434E24] text-white">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#434E24]">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex flex-col justify-center items-center text-center mt-12">
          <Buttons
            buttonText='View More'
            link="/products"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
