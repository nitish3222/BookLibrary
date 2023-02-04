import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to our library's homepage! Here you will find an extensive collection of books, periodicals, and other resources to support your learning and research needs. Our library's mission is to provide access to the knowledge and information that empowers individuals and the community. We believe that a well-stocked library is an important part of a well-informed society, and we are dedicated to making sure that everyone has access to the resources they need to succeed.Thank you for visiting our library's homepage. We look forward to serving you and helping you on your journey of lifelong learning!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header