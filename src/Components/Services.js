import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHandshake} from "react-icons/fa";
import { MdOutlineSchool, MdOutlineFestival } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { BiTrip } from "react-icons/bi";
import './recentTrip.css';
import {GiPickOfDestiny} from "react-icons/gi";
import {motion,useScroll, useTransform } from 'framer-motion';
import "./recentTrip.css"
const Services = () => {
  const ref =useRef(null);
  const {scrollYProgress}=useScroll({
    target: ref,
    offset:["0 1", "0.85 1"],

  })
  const scaleProgess =useTransform(scrollYProgress, [0, 1], [0.5,1]);
  const opacityProgess =useTransform(scrollYProgress, [0, 1], [0.6,1]);

  const isMobileOrTablet = window.innerWidth <= 1024;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [headingHovered, setHeadingHovered] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const mouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: '#bcad3c',
      mixBlendMode: 'difference',
    },
  }
  
  const textEnter = () => {
    setCursorVariant('text');
  };

  const textLeave = () => {
    setCursorVariant('default');
  };

  return (
    <motion.div ref={ref}
      style={
        {
          scale:scaleProgess,
          opacity:opacityProgess,
        }
      }
    className='bg-gray-100 py-10 md:py-20 px-4 md:pl-[130px]'>
      <div className='p-[45px] md:p-12'>
          <h1
            onMouseEnter={() => {
              textEnter();
              setHeadingHovered(true);
            }}
            onMouseLeave={() => {
              textLeave();
              setHeadingHovered(false);
            }}
            className={`text-[40px] text-center font-bold md:text-center md:text-[55px] md:font-bold mt-4 md:mt-0 md:-mb-[80px] mb-6 ${
              headingHovered ? 'text-why-hovered' : ''
            }`}>
            What Services We Provide You?
          </h1>

        
        {isMobileOrTablet ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
          >
            <ServiceCard
              image={<GiPickOfDestiny />}
              name='Pick your itinerary'
              
              description='Choose your travel from the itineraries designed out of experience by your favorite travel Influencer just for you.'
            />
            <ServiceCard
              image={<BiTrip />}
              name='Off-beaten Path'
             
              description=' Ever wondered how 200 km away from the city would be? Brace yourself to explore the uncharted with SAGE, exclusive for your offbeat travels..'
            />
            <ServiceCard
              image={<FaHandshake />}
              name='Build lasting bonds'
              
              description='Away from parties? SAGE Club is just the right place for all your cheap thrills right from 1 AM drives to Sunset watching, join SAGE Club for more.'
            />
            <ServiceCard
              image={<AiOutlineSafety />}
              name='Safety'
              description='Scared of Solo-Travel? Give yourself a journey that you deserve accompanied by SAGE with utmost safety and fun along the way.'
            />
            <ServiceCard
              image={<MdOutlineSchool />}
              name='Travel Scholarship'
              
              description=' Sign up for upcoming competitions and get a chance to win 100% sponsorships on your next journey.'
            />
            <ServiceCard
              image={<MdOutlineFestival/>}
              name='Festivals and Events'
              
              description='Get ready to witness exciting Indian festivals and events hosted by SAGE and embrace the seasons with the tribe you wish.'
            />
          </Carousel>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[50px] md:mt-[120px] pl-[30px]'>
            <ServiceCard
              image={<GiPickOfDestiny />}
              name='Pick your itinerary'
              
              description='Choose your travel from the itineraries designed out of experience by your favorite travel Influencer just for you.'
            />
            <ServiceCard
              image={<BiTrip />}
              name='Off-beaten Path'
              
              description=' Ever wondered how 200 km away from the city would be? Brace yourself to explore the uncharted with SAGE, exclusive for your offbeat travels..'
            />
            <ServiceCard
              image={<FaHandshake />}
              name='Build lasting bonds'
              
              description='Away from parties? SAGE Club is just the right place for all your cheap thrills right from 1 AM drives to Sunset watching, join SAGE Club for more.'
            />
            <ServiceCard
              image={<AiOutlineSafety />}
              name='Safety'
              
              description='Scared of Solo-Travel? Give yourself a journey that you deserve accompanied by SAGE with utmost safety and fun along the way.'
            />
            <ServiceCard
              image={<MdOutlineSchool />}
              name='Travel Scholarship'
             
              description=' Sign up for upcoming competitions and get a chance to win 100% sponsorships on your next journey.'
            />
            <ServiceCard
              image={<MdOutlineFestival/>}
              name='Festivals and Events'
              
              description='Get ready to witness exciting Indian festivals and events hosted by SAGE and embrace the seasons with the tribe you wish.'
            />
          </div>
        )}
        
      </div>
      
    </motion.div>
  );
};

export default Services;
