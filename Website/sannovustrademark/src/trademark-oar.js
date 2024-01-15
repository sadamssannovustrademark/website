import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const TrademarkOARsPage = () => {
    return (
      <div className='trademark-oar' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Trademark Office Action Responses</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Overcoming Hurdles in Your Trademark Registration Journey</i></p>
          <p>Received an office action for your federal trademark application? Don’t worry, San Novus Trademark is here to help get that sorted 
            out so that you can complete your federal trademark registration. Our team, with decades of combined experience working with U.S. 
            Trademark Office examining attorneys, is skilled in obtaining allowance and registration of trademark applications. We commonly address 
            rejections such as:</p>
          <ul>
            <li><b>Likelihood of Confusion</b>
                <ul>
                    <li>The examining attorney found a conflicting mark that he or she believes consumers would confuse with another brand. 
                        Let us help you collaborate with the examining attorney to clarify the distinction between your mark and any conflicting 
                        registrations.</li>
                </ul>
            </li>
            <li><b>Merely Descriptive</b>
                <ul>
                    <li>The examining attorney believes that your mark is describing the goods and/or services that you’re offering, not serving as 
                        an identifying source of your product(s). We’ll demonstrate how your trademark is doing more than just describing the goods 
                        and/or services you’re offering.</li>
                </ul>
            </li>
            <li><b>Objection to Description of Goods/Services</b>
                <ul>
                    <li>The examining attorney has required some additional detail about the description of goods and services listed in your 
                        application. We can refine your description to meet those requirements.</li>
                </ul>
            </li>
            <li><b>Rejection of Specimen</b>
                <ul>
                    <li>The examining attorney objected to the evidence of commercial use that was submitted with your trademark application. 
                        The U.S. Trademark Office has become extremely particular about the specimens that it accepts as bona fide commercial use. 
                        We’ll help you select appropriate evidence of use to satisfy the filing requirements. More detailed information about trademark 
                        specimens can be found in our <a href='#FAQ'>FAQ</a> section.</li>
                </ul>
            </li>
            <li><b>Prior Pending Application</b>
                <ul>
                    <li>Similar to a likelihood of confusion rejection. The examining attorney found another application that hasn’t registered yet, 
                        but that has a filing date which predates your application filing date. If this conflicting application proceeds to registration, 
                        the examining attorney will issue a subsequent office action based on a likelihood of confusion.</li>
                </ul>
            </li>
          </ul>  
          <p>This isn't a comprehensive list of all possible trademark rejections but does cover the most common types of rejection.</p>
        </main>
  
        <footer style={{textAlign:'left'}}>
          <p style={{textAlign:'left', marginBottom:'0'}}><b>Need assistance with an office action?</b></p>
          <p style={{marginTop:'2px'}}>Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to provide us with some
          additional information so that we can ensure your mark gets the protection it deserves. Have more questions? Contact us at XXX-XXX-XXXX or 
          <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a> for professional guidance and peace of mind.</p>
        </footer>
      </div>
    );
  };
  
  export default TrademarkOARsPage;