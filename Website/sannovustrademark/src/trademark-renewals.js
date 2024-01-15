import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const TrademarkRenewalsPage = () => {
    return (
      <div className='trademark-renewals' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Trademark Registration Renewals</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Ensuring the Longevity of Your Trademark</i></p>
          <p><b>Did you know U.S. trademark registrations can be maintained indefinitely with continuous commercial use?</b> A classic example
           is "Coca-Cola," federally registered since 1893 and it is still in force!</p>
          <p><b>When does my trademark need to be renewed?</b></p>  
          <ul style={{
              padding: '0px 0px 0px 25px',
            }}>
              <li style={{marginLeft:'25px'}}><b>Initial Renewal:</b> Between the fifth and sixth year from the registration date.</li>
              <li style={{marginTop:'25px', marginLeft:'25px'}}><b>Subsequent Renewal:</b> Between the ninth and tenth year from the registration 
              date, then every 10 years after that.</li>
            </ul>
            <p style={{marginBottom:'0'}}><b>Easy Renewal with San Novus Trademark:</b></p>
            <p style={{marginTop:'0'}}>Just fill out our brief questionnaire, upload at least one photo showing evidence of use, 
            and we’ll take care of the rest, ensuring that your trademark remains active.</p>
            <p style={{marginBottom:'0'}}><b><u>Beware of Predatory Notices:</u></b></p>
            <p style={{marginTop:'0'}}>Have you received an official-looking notification about renewing your trademark? Be cautious of misleading 
            third-parties like “Patent and Trademark Bureau” or “Patent and Trademark Office,” which are not affiliated with the U.S. Patent and 
            Trademark Office. These companies often solicit renewal services prematurely and at inflated prices. For more details, visit the USPTO’s 
            warning page at: <a href='https://www.uspto.gov/trademarks/protect/caution-misleading-notices' style={{color:'blue'}}>
                https://www.uspto.gov/trademarks/protect/caution-misleading-notices</a>.</p>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p>Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to provide us with some additional information so that we 
          can get to know your trademark registration. Questions about trademark renewal or an "official notice" you received? 
          Contact us at XXX-XXX-XXXX or <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a> for 
          personalized assistance and guidance.</p>
        </footer>
      </div>
    );
  };
  
  export default TrademarkRenewalsPage;