import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Code, DollarSign } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">MedaAuth</h1>
        <nav>
          <Link to="/auth" className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Login / Register
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Authentication Made Simple</h2>
          <p className="text-xl mb-8">Stop wasting time on registration and login code. Use MedaAuth instead.</p>
          <Link to="/auth" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">
            Get Started
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <ShieldCheck className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p>OAuth2 compatible authentication for your applications</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Zap className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast to Deploy</h3>
            <p>Get up and running quickly with our easy-to-use platform</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Code className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
            <p>Integrate with Go, JavaScript, React, Flutter, and more</p>
          </div>
        </section>

        <section className="bg-white bg-opacity-10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Pricing Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-blue-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-4">$29<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-6">
                <li className="mb-2">Up to 1,000 active users</li>
                <li className="mb-2">Basic support</li>
                <li className="mb-2">1 application</li>
              </ul>
              <Link to="/auth" className="block text-center bg-blue-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white text-blue-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">$99<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-6">
                <li className="mb-2">Up to 10,000 active users</li>
                <li className="mb-2">Priority support</li>
                <li className="mb-2">5 applications</li>
              </ul>
              <Link to="/auth" className="block text-center bg-blue-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white text-blue-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">Custom</p>
              <ul className="mb-6">
                <li className="mb-2">Unlimited active users</li>
                <li className="mb-2">24/7 dedicated support</li>
                <li className="mb-2">Unlimited applications</li>
              </ul>
              <Link to="/auth" className="block text-center bg-blue-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MedaAuth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;