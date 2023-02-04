import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to the BookHub Library, where knowledge and information are at your fingertips. Our mission is to provide access to a diverse collection of books, periodicals, and digital resources to support the community's educational, cultural, and recreational needs. With a knowledgeable and friendly staff, comfortable reading areas, and a variety of programs and events, we strive to create a welcoming and inclusive space for all. Whether you're looking to conduct research, complete a school project, or simply enjoy a good book, we have everything you need to fuel your curiosity and creativity. Visit us today and discover the world of possibilities that await you at the BookHub Library.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
