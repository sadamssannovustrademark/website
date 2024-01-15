import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const AboutPage = () => {
    return (
      <div className='trademark-sou' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                About</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>A Forward-Thinking, Virtual Law Firm Dedicated to Trademarks</i></p>
          <p>San Novus Trademark LLP is a virtual law firm that specializes in the intricacies of trademark law. Our specialization extends to 
            offering comprehensive representation in trademark applications and trademark renewals across all 50 states, as well as internationally.</p>
          <p>We provide a range of trademark-related services, from initial application filings to handling office actions and renewals. Our virtual 
            model is designed for modern convenience, offering our clients efficient and flexible legal services no matter where they are located.</p> 
          <p>Our client base spans virtually every industry. Whether you’re a startup or an established business, our goal is to help you safeguard 
            your brand’s identity, giving you peace of mind to focus on what you do best – running your business.</p>
          <p>We believe in complete cost transparency. Our pricing model is clear and straightforward, ensuring that you receive the best 
            representation with no hidden fees.</p>  
          <p>Contact San Novus Trademark LLP today for comprehensive trademark advice and services tailored to your unique needs. Let us handle the 
            complexities of trademark law, so you can concentrate on your business’s success.</p>
        </main>
      </div>
    );
  };
  
  export default AboutPage;