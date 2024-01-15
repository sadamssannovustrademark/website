import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const TrademarkSearchesPage = () => {
    return (
      <div className='trademark-searches' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Trademark Searches</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Ensuring Your Mark's Uniqueness and Registrability</i></p>
          <p>Wondering if your chosen mark can be federally registered? San Novus Trademark is here to assist. 
            Our initial step is a Knockout Search to identify any identical existing trademarks. This search is crucial prior to filing your application, 
            providing a valuable preliminary assessment of your mark's registrability.<br /></p>
          <p style={{marginBottom:'0'}}><b>Try it yourself:</b></p>
          <p style={{marginTop:'2px'}}>You can conduct a basic search with the U.S. Trademark Office using the powerful Trademark Search tool. Simply follow the link and input 
            your mark into the search bar to explore existing trademarks. The Trademark Search tool uses regular expressions to efficiently comb through 
            the federal trademark database. The provided help page is extremely useful if you’re not familiar with the system.<br /></p>
          <p style={{marginBottom:'0'}}><b>For a More In-Depth Search:</b></p>
          <p style={{marginTop:'2px'}}>Consider broadening the scope of your search to include similarly spelled marks. Instead of typing your exact mark in the search bar, 
            tell the search tool to look for variations of the mark. You can do this by using the following format:<br /></p>
            <p style={{marginLeft:'25px'}}>CM:/[search term]/<br /></p>
            <p>Replace any vowels (or letters that might be substituted) in the search term with similar letters in between square brackets. For example, 
                instead of searching for:<br /></p>
            <p style={{marginLeft:'25px'}}>GOOGLE<br /></p>
            <p>try searching for: (note that the first two letters MUST best in CAPS)<br /></p>
            <p style={{marginLeft:'25px'}}>CM:/g[ou][ou]gl[ei]/<br /></p>
            <p>This would tell the search tool to look for the following combinations:<br /></p>
            <ul>
                <li>GOOGLE</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GOOGLI</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GOUGLE</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GOUGLI</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GUOGLE</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GUOGLI</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GUUGLE</li>
                <li style={{padding:'5px 0px 0px 0px'}}>GUUGLI</li>
            </ul>
            <p>Please remember that DIY searches have limitations. A comprehensive trademark search requires expertise and an
                 understanding of the nuances of trademark law.<br /></p>
            <p style={{marginBottom:'0'}}><b>Professional Trademark Search Services:</b></p>     
            <p style={{marginTop:'2px'}}>Our team of experts is skilled in conducting thorough and effective trademark searches. We ensure a comprehensive 
                review, significantly reducing the risk of conflicts. This is included as a part of our services to you.<br /></p>
        </main>
  
        <footer style={{textAlign:'left'}}>
          <p style={{textAlign:'left', marginBottom:'0'}}><b>Need expert help with your trademark search?</b></p>
          <p style={{marginTop:'2px'}}>Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to submit an inquiry. Have questions first? Contact us at XXX-XXX-XXXX or 
          <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a> for professional guidance and peace of mind.</p>
        </footer>
      </div>
    );
  };
  
  export default TrademarkSearchesPage;