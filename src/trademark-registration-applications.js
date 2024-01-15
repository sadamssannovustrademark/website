import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const TrademarkRegistrationApplications = () => {
    return (
      <div className='trademark-registration-applications' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Trademark Registration Applications</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Ready to Secure Your Brand? Let Us Guide You Through the Process</i></p>
          <p><b>Starting your federal trademark application can be complex, but San Novus Trademark is here to simplify it for you. </b> 
           We’ll begin by gathering some basic information from you with our easy-to-use intake form. If you have the following details ready, 
           completing the questionnaire should only take about 5 minutes.</p>
          <ol style={{
              padding: '0px 0px 0px 25px',
            }}>
              <li><b>Trademark Owner:</b> Who will be the legal owner of the trademark?</li>
              <li style={{padding:'10px 0px 0px 0px'}}><b>Type of Mark:</b> Is it a word mark (text only, no design elements), 
              a design logo (a piece of 2-D artwork), or a sound mark?</li>
              <li style={{padding:'10px 0px 0px 0px'}}><b>The Mark Itself: </b> What is the exact mark you wish to register?
               We'll need you to provide the text of the word mark, an image file of the design logo, or a recording of the sound mark.</li>
              <li style={{padding:'10px 0px 0px 0px'}}><b>Usage of the Mark:</b> Are you currently using the mark to sell your goods and/or services?
                <ol style={{padding:'5px 0px 0px 50px'}} type='a'>
                    <li >If yes, when did you first start using the mark commercially (we need at least the month and year)?</li>
                    <li style={{marginTop:'5px'}}>Can you provide evidence of commercial use? Check out our <a href='#FAQ'>FAQ</a> section for accepted evidence types.</li>
                    <li style={{marginTop:'5px'}}>Not using the mark quite yet? That's no problem! We can file the application now and submit the evidence of use later.
                        Evidence of commercial use will eventually be required to complete the registration process, but we can secure your rights 
                        while you get everything ready.
                    </li>
                </ol>
              </li>
              <li style={{padding:'10px 0px 0px 0px'}}><b>Related Goods/Services:</b> What goods and/or services are you offering in connection with the mark?</li>
            </ol>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p>Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to get started today!  
          Have questions or need more detailed guidance? We're here to help. Contact us at XXX-XXX-XXXX or 
          <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a> and we'll be happy to discuss your 
          trademark needs in more detail.</p>
        </footer>
      </div>
    );
  };
  
  export default TrademarkRegistrationApplications;