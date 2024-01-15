import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';
//import headerBackground from './bannerBackground.png';
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
      <div className='home-page' style={{ fontFamily: 'Arial, sans-serif'}}>
        <Header />
        <main>
          <p>Protecting your brand with expertise and precision - Welcome to San Novus Trademark LLP. Our Team of attorneys has decades of combined
             experience navigating the U.S. Trademark Office to help individuals and buisness owners register their trademarks.</p>
          <p>Your trademark application is <a href='https://law.stanford.edu/wp-content/uploads/2016/07/dotrademarklawyersmatter.pdf'style={{color:'blue'}}>22% more likely</a> to proceed to registration if you use an experienced attorney. 
              A San Novus Trademark attorney is here to guide you through the entire trademark registration process, from application to final registration,
               not provide you with a fillable form and make you complete the application process on your own.</p>
          <p>We are a law firm, not a filing service. Watch out for other “filing services” that will take your money and leave you to complete the process
             on your own. We stay up to date with the latest business technologies and practices at the U.S. Patent and Trademark Office to make sure 
             that our clients have the best representation possible. Our virtual model allows us to reduce costs and we pass those savings on to you. 
             You can stay updated with our client centered portal that allows you to review your files directly at any time.</p>
          <p>Let San Novus Trademark help you:</p>
          <ul style={{
              padding: '0px 0px 0px 50px',
            }}>
              <li>Search for existing variations of your mark to ensure unique and defensible branding</li>
              <li style={{padding:'10px 0px 0px 0px'}}>File your federal trademark application to ensure accuracy and completeness</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Respond to a rejection from the U.S. Patent and Trademark Office</li>
              <li style={{padding:'10px 0px 0px 0px'}}>File your Statement of Use to finish your trademark registration</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Renew your registered trademark so you can keep your brand protected for years to come</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Obtain international trademark protection to make sure that you're covered wherever you have a business presence</li>
            </ul>
            <p>San Novus Trademark LLP is a virtual law firm that specializes in trademarks. We offer representation for trademark matters in all 50 states,
               as well as internationally. We will provide you with comprehensive trademark advice and educate you about trademark applications and the 
               registration process. Our fully transparent pricing model is the most competitive in the industry. Let us take care of your federal 
               trademark application so that you can focus on your business.</p>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p>Ready to safeguard your brand? Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to get started on our new 
          application form today! Have questions first? Contact us at XXX-XXX-XXXX or <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a>.</p>
        </footer>
      </div>
    );
  };
  
  export default HomePage;