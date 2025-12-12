import React from 'react'
import {Link} from "react-router-dom"
// Import icons needed for the NEW footer from lucide-react
import { Mail, Phone } from "lucide-react"; 
import "../styles/Home.css"

import house16 from "/images/house16.jpg"
import location from "/images/location.png"
import cash from "/images/cash.png"
import home1 from "/images/home1.png"
import person6 from "/images/person6.jpg"
import polygon from "/images/polygon.png"
import dice from "/images/dice.png"
import person1 from "/images/person1.jpg"
import person7 from "/images/person7.png"
import person4 from "/images/person4.jpg"
import person5 from "/images/person5.jpg"
import home2 from "/images/home2.png"
import calender from "/images/calender.png"
import handshake from "/images/handshake.png"
import creditcard from "/images/creditcard.png"
import world from "/images/world.jpg"

const HomePage = () => {
  const cards = [
    {
      title: "Browse & Discover",
      text: "Explore thousands of verified listings tailored to your needs.",
      icon: home2,
      rotation: ""
    },
    {
      title: "Book an Inspection",
      text: "Schedule property visits easily and chat with landlords / agents easily.",
      icon: calender,
      rotation: "rotate-neg"
    },
    {
      title: "Secure Your Lease",
      text: "Finalize agreements and payments safely through our platform.",
      icon: handshake,
      rotation: ""
    },
    {
      title: "Stay Connected",
      text: "Track payments, raise disputes, and communicate with your landlord / agents.",
      icon: creditcard,
      rotation: ""
    }
  ];
  return (
    <>
 <main>
  <div>
    <div className='main-left'>
      <h1>Find Homes, 
        Connect with Agents, 
        Rent Smarter.</h1>
      <p>
        OgaLandlord makes it easy to rent or list properties with trusted agents and verified payments <br />all in one place.
      </p>
      <p>Start your search by location, property type, or price.</p>
      <div className='main-search-container'>
        <div>
          <label htmlFor="">Location</label>
         <select name="" id="">
          <option value="" disabled>Search Location</option>
          <option value="">Lagos</option>
         </select>
         <img src={location} alt="" />
        </div>
        {/* Location */}
       <div>
          <label htmlFor="">Type</label>
         <select name="" id="">
          <option value="" disabled>Property Type</option>
          <option value="">Lagos</option>
         </select>
           <img src={home1} alt="" />
        </div>
        {/* Type */}
        <div>
          <label htmlFor="">Price Range</label>
         <select name="" id="">
          <option value="" disabled>Price Range</option>
          <option value="">Lagos</option>
         </select>
           <img src={cash} alt="" />
        </div>
        {/* Price range */}
        
      </div>
      <a href="">Search Properties</a>
    </div>
    <div className='main-right'>
      <img src={house16} alt="" />
    </div>
  </div>
 </main>
 {/* End of main */}
 {/* End of main */}
 {/* End of main */}
 <section className='why-choose'>
  <div className='why-choose-top'>
 <h2>Why Choose OgaLandlord</h2>
  <p>Everything you need to rent, list, and manage properties
all in one secure, smart platform
</p>
  </div>
 <div className='why-choose-flex'>
  <div>
    <h3>Verified Listings</h3>
    <p>Trust every property you see</p>
    <p>
      Every property on OgaLandlord goes through a strict verification process to confirm ownership, accuracy, and compliance. We check key details so you don’’t waste time on fake or outdated listings. Genuine properties are showcased and tenants browse with confidence.<br/><br/> With verified listings, what you see online is exactly what you’ll find in person, making your search safer, faster and stress-free.
    </p>
    <img src={polygon} alt="polygon" />
  </div>
  <div>
<img src={person6} alt="" />
  </div>
 </div>
 </section>
 {/* End of why choose ogalandlord */}
 {/* End of why choose ogalandlord */}
 {/* End of why choose ogalandlord */}
 <section className='how-ogalandlord-works'>
  <div className='how-ogalandlord-works-top'>
    <h2>How OgaLandlord Works</h2>
    <p>Get started in just a few steps</p>
  </div>
  {/* End of top */}
  <div className='how-ogalandlord-works-flex'>
    <div>
      <div>
        <img src={dice} alt="" />
        <h3>Roll With It in 4 Simple Moves</h3>
      </div>
      <p>Whether you’re renting a home or managing one, we’ve made it fast and stress free.</p>
      <p>Don’t wait-rent faster, list faster.</p>
   <Link href="#">Get Started</Link>
    </div>
    {/* Left */}
   <div className="cards-wrapper">
      {cards.map((card, i) => (
        <div key={i} className={`card ${card.rotation}`}>
          <img src={card.icon} alt="icons" className='icon'/>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
       <img src={polygon} alt="polygon" />
    {/* End of right */}
  </div>
 </section>
 {/* End of why Ogalandlord works */}
 {/* End of why Ogalandlord works */}
 {/* End of why Ogalandlord works */}
<div className="testimonials-section">
  <div className="testimonials-section-top">
  <h2>Testimonials</h2>
  <p>Join thousands who've simplified real estate with OgaLandlord</p>
    </div>

  <div className="map-container">
<img src={world} alt="world" />
    <div className="t-item t1">
      <img src={person1} alt="person1" />
      <p>As a landlord, I can register and create a profile.
OgaLandlord is awesome!</p>
    </div>

    <div className="t-item t2">
      <img src={person7} alt="person7" />
      <p>As an agent, I can list multiple properties with
descriptions, images and price.</p>
    </div>

    <div className="t-item t3">
      <img src={person4} alt="person4" />
      <p>As a tenant, I can search for properties by area
using a map address input.</p>
    </div>

    <div className="t-item t4">
      <img src={person5} alt="person5" />
      <p>As a tenant, I can request an inspection by 
selecting a date and time.</p>
    </div>

  </div>
</div>

{/* START OF MERGED FOOTER CODE - REWRITTEN FOR CUSTOM CSS */}
<footer className="footer-section">
    <div className="footer-container">
        {/* Left Section */}
        <div className="footer-col footer-col-left">
            <img
                src="./images/OLlogo.png"
                alt="OgaLandlord Logo"
                className="footer-logo"
            />
            <p className="footer-text">
                From verified listings to trusted agents, secure payments, and easy dashboards —
                OgaLandlord takes the stress out of renting. Whether you're searching or listing,
                everything is smoother here.
            </p>
        </div>

        {/* Middle Section */}
        <div className="footer-col footer-col-middle">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
        </div>

        {/* Right Section */}
        <div className="footer-col footer-col-right">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-item">
                <Mail size={16} />
                <span>ogalandlord@gmail.com</span>
            </div>
            <div className="footer-contact-item">
                <Phone size={16} />
                <span>+234 810 899 56071</span>
            </div>
        </div>
    </div>
</footer>
{/* END OF MERGED FOOTER CODE */}

</>
  )
}

export default HomePage