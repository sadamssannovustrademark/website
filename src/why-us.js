import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const WhyUsPage = () => {
    return (
      <div className='why-us' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Why Us?</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Expert Legal Representation, Focused on Affordability</i></p>
          <p>San Novus Trademark is here to help you protect your brand at a low, fixed cost. Our attorneys bring decades of combined experience 
            in trademark law, ensuring that your registration process is handled with skill and precision. We have successfully completed thousands 
            of filings for clients just like you!</p>
          <p style={{marginBottom:'0'}}><b>Above and Beyond Basic Filing Services:</b></p>
          <p style={{marginTop:'0'}}>We are a law firm, not a “filing service” like LegalZoom® or Trademarkia®, meaning we will represent you before 
          the U.S. Patent and Trademark Office. Our approach is not just about filling out forms; it’s about providing expert guidance and advocacy to 
          successfully secure your trademark.</p>
          <p style={{marginBottom:'0'}}><b>The Ideal Middle Ground:</b></p>
          <p style={{marginTop:'0'}}>We understand that DIY solutions are limited, and the cost of a traditional full-service law firm can be 
          prohibitive. San Novus Trademark fills this gap by offering comprehensive help without the excessive expense. We offer a perfect blend 
          of professional legal assistance and cost-effectiveness.</p>
          <p style={{marginBottom:'0'}}><b>Staying Ahead with Technology and Knowledge</b></p>
          <p style={{marginTop:'0'}}>Our team is constantly updated on the latest practices at the U.S. Patent and Trademark Office and utilizes the 
          latest consumer technologies. This commitment ensures that your trademark experience is as seamless and effective as possible.</p>
          <p style={{marginBottom:'0'}}><b>Transparent Communication and Fixed-Rate Pricing:</b></p>
          <p style={{marginTop:'0'}}>We believe in building relationships on trust and transparency. Our communication is straightforward and our 
          pricing model is fixed-rate, meaning no surprises or hidden costs for you.</p>
          <p style={{marginBottom:'0'}}><b>Looking for a partner to protect your brand?</b></p>
          <p style={{marginTop:'0'}}>Contact San Novus Trademark for expert trademark services that combine experience, efficiency, and affordability. 
          Let us navigate the complexities of trademark law, while you focus on growing your business.</p>
        </main>
      </div>
    );
  };
  
  export default WhyUsPage;