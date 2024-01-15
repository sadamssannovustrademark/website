import React from "react";
import logo from './FullLogo.png';
import './App.css';
import AccordionItem from './AccordionItem';
import Header from './header';

const FAQPage = () => {
    const faqData = [
        {
            question: "What is the difference between a trademark and a copyright?",
            answer: [
                <p><b>Trademarks: </b>Trademarks are used to distinguish your goods or services from others, associating your specific brand with your mark. " +
                "They typically cover things like brand names, logos, and slogans.</p>,
                <p><b>Copyrights: </b>Copyrights protect original works of authorship, such as books, paintings, music, and films. They give the creator " +
                "exclusive rights to their work.</p>
            ]
        },
        {
            question: "Why do I need a federally registered trademark?",
            answer: [
                <p>Obtaining a federally registered trademark is invaluable for your business for several reasons:</p>,
                <p><b>Protection Against Competitors: </b> It legally protects your brand, preventing others from using similar marks that could
                cause confusion. This protection extends nationwide, giving you exclusive rights to use your mark in connection with your goods
                or services in all 50 states.</p>,
                <p><b>Brand Recognition: </b>A registered trademark makes it easier for customers to identify and choose your products or services
                over others. It serves as a symbol of quality and trust associated with your brand.</p>,
                <p><b>Enhanced Business Value: </b>A trademark is an intangible asset that can significantly increase your company's worth. It not 
                only bolsters brand recognition but can also be a key factor in business agreements, licensing, or even in the sale of the business.</p>,
                <p>A federally registered trademark is more than just a symbol; it's a key component of your brand's identity and business strategy.</p>,
                <p>Thinking about trademark registration or have questions? Contact <b>San Novus Trademark</b> for a comprehensive discussion on how a 
                federal trademark registration can benefit your specific business.</p>
            ]
        },
        {
            question: "Are trademark registrations expensive?",
            answer: [
                <p>While the cost of filing a federal trademark application can vary, it doesn’t necessarily have to be expensive. The overall cost 
                    is influenced by several factors, including the type of application, the number of goods and/or service classes included, and 
                    the specific details of your mark. Every client is unique.</p>,
                <p>At <b>San Novus Trademark</b>, we’re committed to providing competitive and transparent pricing. We understand the importance of budgeting, 
                    especially for small businesses and startups. Our aim is to help you strategize your trademark filing in a way that aligns with 
                    your business needs, ensuring you get the best value for your investment.</p>,
                <p>Concerned about costs or need a tailored filing plan? Reach out to us for a detailed discussion. We can provide you with a 
                    customized filing strategy and a clear understanding of our fee structure, which is designed to be straightforward and 
                    budget-friendly. An overview of our fee schedule can be viewed here.</p>
            ]
        },
        {
            question: "I’ve heard the terms “trademark” and “service mark.” How are these different?",
            answer: [
                <p>Both trademarks and service marks function as identifiers, but they apply to different aspects of a business:</p>,
                <p><b>Trademark: </b>This term is used to identify and distinguish goods or products offered for sale. For example, the 
                Nike<span>&reg;</span> “swoosh” on shoes is a trademark, as it identifies the source of the footwear.</p>,
                <p><b>Service Mark: </b>Different from a trademark, a service mark relates to services rather than goods. For instance, 
                the term FedEx<span>&reg;</span> used in relation to shipping and delivery services is a service mark, as it identifies the 
                source of these services.</p>,
                <p>Legally, both trademarks and service marks are registered and protected in similar ways, ensuring that businesses can safeguard 
                    their brand identity, whether it relates to products, services, or both.</p>,
                <p>Need more information or assistance in registering a trademark or service mark? Contact <b>San Novus Trademark</b> for 
                    expert guidance tailored to your specific needs.</p>
            ]
        },
        {
            question: "What is the difference between a TEAS Standard and a TEAS Plus application?",
            answer: [
                <p>The main difference between TEAS Standard and TEAS Plus applications lies in the descriptions used for goods and services 
                    and the associated filing fees charged by the Patent and Trademark office.</p>,
                <p><b>TEAS PLUS: </b>This option requires using pre-defined descriptions from the Trademark ID Manual. Choosing these specific 
                descriptions often accelerates the examination process and simplifies the examining attorney's work. As an incentive, the U.S. 
                Patent and Trademark Office offers a reduced filing fee of $250 per class for TEAS Plus applications, compared to the standard fee 
                of $350 per class. This option is cost-effective but requires strict adherence to the manual’s descriptions.</p>,
                <p><b>TEAS Standard: </b>If your trademark needs a more customized description — known as "free-form" — then a TEAS Standard 
                application is appropriate. This option offers more flexibility in describing your goods or services but comes with a higher filing 
                fee of $350 per class.</p>,
                <p>The choice between TEAS Standard and TEAS Plus depends on whether your goods or services can be accurately described using the 
                    manual’s pre-defined terms. You can search the Trademark ID Manual <a href='https://idm-tmng.uspto.gov/id-master-list-public.html' style={{color:'blue'}}>
                        here</a>.</p>,
                <p>Not sure which application type is right for you? Contact <b>San Novus Trademark</b> for guidance. We can help you 
                decide the best approach for your trademark application, considering both cost efficiency and the unique aspects of your brand.</p>
            ]
        },
        {
            question: "Can San Novus Trademark help me determine an appropriate description of goods and services for my federal trademark application?",
            answer: [
                <p>Absolutely! San Novus Trademark is dedicated to helping our clients file the best quality and most cost-efficient applications 
                    possible. We work closely with you to develop descriptions that accurately and comprehensively represent your goods or services.</p>,
                <p>The process of selecting the right description is vital for ensuring robust trademark protection. While the Trademark ID Manual 
                    offers pre-defined descriptions, we recognize that these may not always suit the unique aspects of your mark. Our experienced 
                    team will leverage their knowledge in trademark prosecution to craft a description that perfectly aligns with your specific needs, 
                    ensuring optimal protection for your brand.</p>,
                <p><b>Need expert guidance on your trademark application?</b> Reach out to us for personalized assistance in developing a 
                description that best represents your goods or services, tailored to maximize the effectiveness of your trademark protection.</p>
            ]
        },
        {
            question: "What kinds of evidence of commercial use is the U.S. Patent and Trademark Office looking for?",
            answer: [
                <p><b><u>For Goods</u></b></p>,
                <p style={{marginLeft:'25px'}}><u>Acceptable:</u></p>,
                <ul style={{marginLeft:'50px'}}>
                    <li>The mark on the product itself</li>
                    <li>The mark on product packaging</li>
                    <li>The mark on a website where consumers can order the product (must include an "Add to Cart" button or something similar)</li>
                    <li>The mark illustrated in an owner/user manual that is distributed with the product at the time of sale</li>
                    <li>The mark on a hang tag affixed to clothing articles. Please note that the mark printed on a clothing article itself will 
                        likely be considered "ornamental use" and rejected by the examining attorney.</li>
                    <li>A screenshot from a software application (software trademarks only)</li>
                </ul>,
                <p style={{marginLeft:'25px'}}><u>NOT Acceptable:</u></p>,
                <ul style={{marginLeft:'50px'}}>
                    <li>The mark on an invoice for the sale of a product</li>
                    <li>The mark on a website that merely describes the product, but where consumers cannot directly order or purchase the product</li>
                    <li>Shipping label for the product</li>
                    <li>Advertisements for the product</li>
                    <li>News article(s) about the product</li>
                    <li>The mark printed on a clothing article itself (this is considered to be "ornamental use" - not an identifying source of the 
                        trademark)</li>
                    <li>Anything related to pre-orders for a product</li>
                </ul>,
                <p style={{marginTop:'25px'}}><b><u>For Services</u></b></p>,
                <p style={{marginLeft:'25px'}}><u>Acceptable:</u></p>,
                <ul style={{marginLeft:'50px'}}>
                    <li>The mark on an advertisment for services being offered (mailers, description on a website, etc.)</li>
                    <li>The mark on brick-and-mortar store signage that shows the services being offered (road signs, billboards, 
                        banners/signage located inside or outside of physical store, etc.)</li>
                    <li>The mark on an invoice for sale of services that shows which services were sold</li>
                    <li>The located on a website where consumers can register or sign up for the services you are offering</li>
                    <li>The mark used on a business vehicle for advertising purposes, and that shows the services</li>
                </ul>,
                <p style={{marginLeft:'25px'}}><u>NOT Acceptable:</u></p>,
                <ul style={{marginLeft:'50px'}}>
                    <li>A PDF or computer image file that was created solely for the purpose of filing with the U.S. Patent and Trademark Office</li>
                    <li>The mark with no context given to the services being offered in connection with the mark</li>
                    <li>Recordings of radio advertisements for services (only allowed for sound marks)</li>
                </ul>,
            ]
        },
        {
            question: "How long does it take for a trademark application to be examined and subsequently registered?",
            answer: [
                <p>There are multiple variables that can affect the prosecution time of a trademark application – the number of other 
                    applications the examining attorney is currently working on, how many applications are ahead of yours in the docket, etc. 
                    The U.S. Patent and Trademark Office strives to issue initial correspondence about new trademark applications within six months 
                    from the application filing date. This timeline, however, may be affected by current staffing at the Trademark Office or the 
                    volume of new applications currently under review. Current processing times can be viewed directly with the U.S. Patent and Trademark 
                    Office at <a href='https://www.uspto.gov/dashboard/trademarks/application-timeline.html' style={{color:'blue'}}>
                        https://www.uspto.gov/dashboard/trademarks/application-timeline.html</a>.</p>
            ]
        },
        {
            question: "My federal trademark application has been filed. Now what happens?",
            answer: [
                <p>Once your trademark application is filed with the U.S. Patent and Trademark Office, it undergoes a detailed review 
                    process:</p>,
                <ul style={{marginLeft:'25px'}}>
                    <li><b>Digital File Wrapper: </b>The Trademark Office creates an online digital file for your application, allowing you to track 
                    its progress.</li>
                    <li><b>Assignment and Review: </b>An examining attorney is assigned to your application. They will thoroughly review it.</li>
                    <li><b>Examination for Conflicts: </b>The examining attorney searches for any existing trademarks or applications that might be 
                    similar to yours. They also check to ensure your application meets all formatting and description requirements.</li>
                    <li><b>Office Action (if necessary): </b>If any potential conflicts or issues are identified, the examining attorney will issue 
                    an 'Office Action', formally rejecting the application. This isn't the end! You'll have the opportunity to respond to these 
                    objections, and <b>San Novus Trademark</b> can assist in crafting a response aimed at overcoming these hurdles.</li>
                    <li><b>Publication for Opposition: </b>Once all objections are addressed, the application moves forward for public opposition. 
                    This is a 30-day period where others can oppose your trademark if they believe it infringes on their rights.</li>
                    <li><b>Final Steps: </b>If there’s no opposition, your trademark will either be registered directly, or a Notice of Allowance will 
                    be issued. This indicates that your mark will be registered once you provide evidence of commercial use.</li>
                </ul>,
                <p>Need assistance or have questions about the process? Contact <b>San Novus Trademark</b> for expert guidance every step of the way.</p>
            ]
        },
        {
            question: "How likely is it that an examining attorney will reject my trademark application?",
            answer: [
                <p>The likelihood of an examining attorney rejecting a trademark application can vary, depending on several factors:</p>,
                <ul style={{marginLeft:'25px'}}>
                    <li><b>Common Phrases and Terms: </b>If your mark contains commonly used phrases or terms, it may face more scrutiny.</li>
                    <li><b>Relevance to Goods/Services: </b>How your mark relates to the goods or services you offer is also a critical consideration.</li>
                </ul>,
                <p>At <b>San Novus Trademark</b>, we conduct a detailed search with the U.S. Trademark Office prior to filing your application. 
                This search helps us identify any directly conflicting marks. We then provide you with an informed assessment of your mark's 
                likelihood of successful registration. Our goal is to minimize the chances of rejection by ensuring your application is as strong as 
                possible right from the start.</p>,
                <p>Concerned about your trademark's registrability? Reach out to us for a customized evaluation and guidance on how best to proceed 
                    with your trademark application.</p>
            ]
        },
        {
            question: "My trademark is registered in the U.S. Is it also covered internationally?",
            answer: [
                <p>Trademarks provide protection that is specific to each country. This means a trademark registered in the United States 
                    is protected in the U.S. but not automatically in other countries. For instance, a U.S. trademark does not grant you rights 
                    in Canada or Mexico.</p>,
                <p>If you're looking to protect your brand internationally, there are several pathways to consider, such as applying through the 
                    Madrid Protocol or filing directly in individual countries. Each option has its own processes and benefits, and the best choice 
                    can depend on your specific needs and business goals.</p>,
                <p>Planning to expand your brand globally? Reach out to <b>San Novus Trademark</b> for expert guidance on developing an effective 
                international trademark strategy. Our team can help you navigate the complexities of global trademark protection.</p>
            ]
        },
        {
            question: "How do I obtain trademark protection outside of the U.S.?",
            answer: [
                <p>International trademark applications must be filed within six months from the U.S. filing date to claim the benefit of 
                    the original U.S. filing date. Foreign applications can technically be filed at any time, but it is best to be able to 
                    claim the earliest filing date possible. Unfortunately, there is not a singular “international trademark application” that will 
                    provide trademark coverage in every single country outside of the U.S., but international filings are available and can be 
                    completed in two ways:</p>,
                <ol style={{marginLeft:'25px'}}>
                    <li>An application filed through the Madrid Protocol; or</li>
                    <li style={{marginTop:'10px'}}>2.	A direct filing into a foreign country.</li>
                </ol>,
                <p>The best filing strategy will depend upon your desired results. It is also important to note that not all countries participate 
                    under the Madrid Protocol, so this filing method may not be available in every situation. The major benefit of filing under the 
                    Madrid Protocol is a potential reduction of filing costs. Since our office is authorized to file international trademark 
                    applications with the World Intellectual Property Office (“WIPO”), filings completed under the Madrid Protocol would not incur 
                    attorney fees for countries where those filings can be completed. If you are seeking trademark protection in a country that does 
                    not participate under the Madrid Protocol then we would need to work with our network of associates in foreign countries to 
                    accomplish that filing, which would incur additional foreign attorney fees.</p>
            ]
        },
        {
            question: "Can I file one international trademark application to cover all countries outside of the U.S.?",
            answer: [
                <p>o	No, each country has its own set of laws surrounding trademarks and trademark protection. Just like the U.S. has 
                    its own trademark filing process and laws, so do all other countries. Trademark applications must be filed individually in 
                    each country where you are seeking protection. The only exception to this is by filing into the European Union, which offers 
                    protection in all 27 member countries.</p>
            ]
        },
        {
            question: "How long will my registered trademark be enforceable?",
            answer: [
                <p>Federal trademarks need to be renewed periodically to remain in force. If the trademark is renewed at the appropriate time, 
                    it can be maintained indefinitely. Trademarks must be renewed at the following intervals:</p>,
                <ul style={{marginLeft:'25px'}}>
                    <li>Between the fifth and sixth year from the date of registration of the trademark</li>
                    <li style={{marginTop:'10px', marginLeft:'25px'}}>Between the ninth and tenth year from the date of registration of the trademark</li>
                    <li style={{marginTop:'10px', marginLeft:'25px'}}>Every subsequent 10 years</li>
                </ul>
            ]
        },
        {
            question: "How much does it cost to renew my trademark?",
            answer: [
                <p>The cost to renew your trademark primarily depends on the government filing fees, which vary for each class your 
                    trademark is registered under. These fees can change, so it's best to check the current rates on the<span>&nbsp;</span>
                    <a href='https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule#TM%20Post%20registration' style={{color:'blue'}}>
                        USPTO website</a>.</p>,
                <p>At <b>San Novus Trademark</b>, we pride ourselves on offering competitive pricing for trademark renewals. Our approach 
                ensures that you receive quality service at a cost-effective rate. For detailed information on our fees, please refer to our 
                fee structure.</p>,
                <p>Considering a trademark renewal and need a custom quote? Don’t hesitate to contact us. We can provide a personalized estimate 
                    based on your specific trademark renewal needs, ensuring clarity and affordability in the renewal process.</p>
            ]
        }
    ];
  
    return (
      <div className='faq' style={{ fontFamily: 'Arial, sans-serif'}}>
        <Header />
  
      <main style={{marginTop:' 10px'}}>
          <h1 style={{
            alignContent:'center', 
            marginBottom:'0', 
            marginTop: '5px', 
            textAlign:'center',
            fontSize: '24pt',
            }}>
                FAQ</h1>
          <p style={{
            alignContent:'center',
            marginBottom:'25px', 
            marginTop:'0', 
            textAlign:'center',
            fontSize: '12pt',
            }}>
                <i>You Have Questions, We Have Answers</i></p>
          <div className='faq-page'>
            {faqData.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </main>
  
        <footer style={{ padding: '20px' }}>
          <p>Ready to safeguard your brand? Click <a href='https://www.sannovustrademark.com'style={{color:'blue'}}>here</a> to get started on our new 
          application form today! Have questions first? Contact us at XXX-XXX-XXXX or <a href='info@sannovustrademark.com' style={{color:'blue'}}>info@sannovustrademark.com</a>.</p>
        </footer>
      </div>
    );
  };
  
  export default FAQPage;