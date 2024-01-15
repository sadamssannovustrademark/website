import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const TrademarkSOUPage = () => {
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
                Trademark Statements of Use</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Completing Your Registration with Proof of Use</i></p>
          <p>Congratulations on your federal trademark application being allowed! San Novus Trademark is here to assist you in 
            filing the Statement of Use – the final step in the trademark registration process for applications filed under an “intent-to-use” basis. 
            The U.S. Trademark Office requires proof of commercial use to officially register a trademark.</p>
          <p>A Statement of Use includes:</p>  
          <ol style={{
              padding: '0px 0px 0px 25px',
            }}>
              <li style={{marginLeft:'25px'}}><b>Evidence of Use:</b> Photographs or screenshots, showing your mark being used in connection with the sale of
                the goods and/or services listed in your application.</li>
              <li style={{marginTop:'25px', marginLeft:'25px'}}><b>First Use Anywhere:</b> The first date that you first started using your mark anywhere 
                (requires at least the month and year).</li>
              <li style={{marginTop:'25px', marginLeft:'25px'}}><b>First Use in Commerce: </b> The first date that you started using your mark in commerce. 
                What is the date of the first sale, or the date that you first started offering services (requires at least the month and year)? 
                These dates can be, and often are, identical or they can be different. We just need to submit accurate information to the 
                Trademark Office.</li>
            </ol>
            <p><b>Filing Requirements:</b></p>
            <p><b><u>For Goods (Trademarks)</u></b></p>
            <ul style={{marginLeft:'50px'}}>
                <li><u>Acceptable:</u> The mark on a product itself, the mark on product packaging, website order page, user manuals, clothing 
                hang tags, software screenshots.</li>
                <li style={{marginTop:'15px'}}><u>NOT Acceptable:</u> The mark on invoices, non-transactional websites, shipping labels, advertisements, 
                news articles, ornamental clothing use, pre-order promotions.</li>
            </ul>
            <p><b><u>For Services (Service Marks)</u></b></p>
            <ul style={{marginLeft:'50px'}}>
                <li><u>Acceptable:</u> The mark in advertisements, physical store signage, invoices, website service registration links, business vehicles.</li>
                <li style={{marginTop:'15px'}}><u>NOT Acceptable:</u> PDF/image files generated only for filing with the Trademark Office, marks without 
                context, radio ad recordings</li>
            </ul>
            <p><b>Not quite ready for commercial use yet?</b> That's not a problem! The U.S. Trademark Office allows for the filing of up to five (5) 
            extensions of time, in six-month increments, before requiring you to file the Statement of Use. That's an available time limit of up to 
            three (3) years before you are required to provide evidence of use.</p>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p>Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to get started!  
          Have questions about the Statement of Use or extensions of time? Contact us at XXX-XXX-XXXX or 
          <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a> for a detailed discussion about your specific needs.</p>
        </footer>
      </div>
    );
  };
  
  export default TrademarkSOUPage;