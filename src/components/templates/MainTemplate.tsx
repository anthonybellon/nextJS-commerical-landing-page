import * as React from 'react';
import NavBar from '@components/organisms/NavBar';
import Section from '@components/molecules/Section';
import Footer from '@components/molecules/Footer';
import { navItems } from '@config/navConfig';
import { buttons } from '@config/buttonConfig';

const MainTemplate: React.FC = () => (
  <>
    <NavBar navItems={navItems} buttons={buttons} />
    <Section className="bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Our Services</h2>
        <p>Details about services offered...</p>
      </div>
    </Section>
    <Section>
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-bold">About Us</h2>
        <p>Information about the company...</p>
      </div>
    </Section>
    <Footer />
  </>
);

export default MainTemplate;
