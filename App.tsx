
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Learning } from './pages/Learning';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ShippingReturns } from './pages/ShippingReturns';
import { Printables } from './pages/Printables';
import { Games } from './pages/Games';
import { Terms } from './pages/Terms';


const ComingSoon = ({ title }: { title: string }) => (
  <div className="container mx-auto py-20 px-4 text-center">
    <h1 className="font-heading text-4xl mb-4 text-neutral-dark">{title}</h1>
    <p className="font-body text-xl text-neutral-dark/60">Coming soon! We are building this page just for you.</p>
  </div>
);

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/games" element={<Games />} />
        <Route path="/products" element={<Products />} />
        <Route path="/parents" element={<ComingSoon title="For Parents" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/printables" element={<Printables />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<ComingSoon title="404 - Not Found" />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
