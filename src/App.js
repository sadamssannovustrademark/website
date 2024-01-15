import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage';
import ServicesPage from './services';
import TrademarkSearchesPage from './trademark-searches';
import TrademarkRegistrationApplications from './trademark-registration-applications';
import TrademarkOARsPage from './trademark-oar';
import TrademarkSOUPage from './trademark-sou';
import TrademarkRenewalsPage from './trademark-renewals';
import InternationalTrademarksPage from './international-trademarks';
import AboutPage from './about';
import WhyUsPage from './why-us';
import FAQPage from './faq';
import PricingPage from './pricing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/trademark-searches' element={<TrademarkSearchesPage />} />
        <Route path='/trademark-registration-applications' element={<TrademarkRegistrationApplications />} />
        <Route path='/trademark-oar' element={<TrademarkOARsPage />} />
        <Route path='/trademark-sou' element={<TrademarkSOUPage />} />
        <Route path='/trademark-renewals' element={<TrademarkRenewalsPage />} />
        <Route path='/international-trademarks' element={<InternationalTrademarksPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/why-us' element={<WhyUsPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/pricing' element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;