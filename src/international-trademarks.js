import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const InternationalTrademarksPage = () => {
    return (
      <div className='international-trademarks' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                International Trademark Applications</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Expanding Your Brand’s Reach Globally</i></p>
          <p><b>Thinking of taking your brand international?</b> San Novus Trademark is here to guide you in registering your trademark 
          beyond the United States. We understand the complexities of the global marketplace and offer tailored foreign filing strategies 
          to align with your needs and budget.</p>
          <p style={{marginBottom:'0'}}><b>Adaptable Strategies for Global Protection:</b></p>
          <p style={{marginTop:'0'}}>Our approach to international trademark protection is designed to be versatile. Whether your goal is to 
          penetrate specific foreign markets or to secure broad international coverage, our seasoned team of trademark professionals is equipped 
          to devise a strategy that aligns seamlessly with your brand's global aspirations.</p>
          <p style={{marginBottom:'0'}}><b><u>Expertise in WIPO Filings and Global Connections:</u></b></p>
          <p style={{marginTop:'0'}}>By filing applications directly with the World Intellectual Property Organization (“WIPO”) and utilizing our 
          vast network of associate attorneys across the globe, we offer a dual approach. This strategy merges the efficiency of centralized filing 
          with the localized expertise of attorneys in your target countries, ensuring comprehensive and cost-effective solutions for your international 
          trademark needs.</p>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p><b>Ready to take your brand global?</b> Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> 
          to begin crafting your tailored international filing strategy! Have questions first? Contact us at XXX-XXX-XXXX or 
          <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a>.</p>
        </footer>
      </div>
    );
  };
  
  export default InternationalTrademarksPage;