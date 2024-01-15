import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const ServicesPage = () => {
    return (
      <div className='services-page' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Services</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Excelling in Trademark Protection - Our Specialized Services</i></p>
          <p>San Novus Trademark specializes exclusively in trademark law. We offer unparalleled expertise and precision in protecting your 
            brand’s identity. We’re the best in the industry and can help you with the following:</p>
          <ul style={{
              padding: '0px 0px 0px 50px',
            }}>
              <li>Trademark Searching: Ensuring unique and defensible branding for your mark.</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Securing your trademark: Comprehensive assistance with registration applications.</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Navigating Registration Challenges: Expert responses to application rejections.</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Trademark Statements of Use: Finalizing your registration with accurate usage declarations.</li>
              <li style={{padding:'10px 0px 0px 0px'}}>Trademark Maintenance: Renew your registered trademark for ongoing protection.</li>
              <li style={{padding:'10px 0px 0px 0px'}}>International Coverage: Extend your brand’s reach with foreign trademark applications.</li>
            </ul>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p>Ready to move forward? Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to get started on our new 
          application form to start protecting your brand today! Have questions first? Contact us at XXX-XXX-XXXX or 
          <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a>.</p>
        </footer>
      </div>
    );
  };
  
  export default ServicesPage;