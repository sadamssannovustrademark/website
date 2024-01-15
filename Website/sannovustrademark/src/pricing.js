import React from "react";
import logo from './FullLogo.png';
import './App.css';
import Header from './header';

const PricingPage = () => {
    return (
      <div className='pricing-page' style={{ fontFamily: 'Arial, sans-serif'}}>
          <Header />
  
        <main style={{marginTop:' 10px'}}>
          <p style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                Pricing</p>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>Clear, Transparent Pricing</i></p>
          <p>San Novus Trademark values a transparent and simple pricing structure. We offer fixed prices for our services, 
            billing by project rather than on an hourly basis. This approach ensures that you know exactly what to expect in terms of costs, 
            without any surprises.</p>
          <table id='pricingTable' style={{alignContent:'center', textAlign:'center', marginLeft:'15%', marginRight:'15%'}}>
            <tr>
                <th style={{textAlign:'center'}}>Service</th>
                <th style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>Cost</th>
            </tr>
            <tr>
                <td style={{textAlign:'left'}}>Trademark Comprehensive Search (standalone)</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$250</td>
            </tr>
            <tr>
                <td style={{textAlign:'left'}}>Trademark Registration Application (includes Knockout Search)</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$375 </td>
            </tr>
            <tr>
                <td style={{textAlign:'left'}}>Trademark Office Action:</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}></td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Likelihood of Confusion</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$500</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Merely Descriptive</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$500</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Geographically Descriptive</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$500</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Objection to Description of Goods/Services</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$100 per class</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Rejection of Specimen</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$175</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Primarily a Surname</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$100</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Disclaimer</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$100</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Translation</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$100</td>
            </tr>
            <tr>
                <td style={{textAlign:'left'}}>Statement of Use</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$200</td>
            </tr>
            <tr>
                <td style={{textAlign:'left'}}>Renewals:</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}></td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Section 8 Only</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$200</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Section 15 Only (incontestability)</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$200</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Section 9 Only</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$200</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Section 8 & 15</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$375</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Section 8 & 9</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$375</td>
            </tr>
            <tr>
                <td style={{textAlign:'left'}}>International Applications:</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}></td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Madrid Protocol</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$375</td>
            </tr>
            <tr>
                <td style={{textAlign:'right'}}>Direct Filing</td>
                <td style={{textAlign:'center', verticalAlign:'middle', paddingLeft:'25%', whiteSpace:'nowrap'}}>$100 per country</td>
            </tr>
          </table>
          <p style={{marginTop:'25px'}}>Please note: Listed prices do not include government filing fees. These fees are set by the U.S. 
          Patent and Trademark Office and are subject to change. For the most current fee schedule, please visit the 
          <a href='https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule#Trademark%20Fees' style={{color:'blue'}}>
            USPTO Fee Schedule</a>.</p>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p><b>Have questions about our pricing or need more details about our services?</b>  
          Contact us at XXX-XXX-XXXX or <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a> to discuss
          your specific trademark needs and how we can assist you efficiently and cost-effectively.</p>
        </footer>
      </div>
    );
  };
  
  export default PricingPage;