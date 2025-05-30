'use client';

import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { getPricingData } from '../dictionaries/pricing';

export default function Pricing() {
  const [locale, setLocale] = useState('en-US');
  const [pricingData, setPricingData] = useState(null);

  useEffect(() => {
    console.log("💰 Pricing component loaded!");

    // Get locale from URL or default to en-US
    const currentLocale = window.location.pathname.includes('/en-IN') ? 'en-IN' : 'en-US';
    setLocale(currentLocale);
    setPricingData(getPricingData(currentLocale));

    console.log("🌍 Pricing locale:", currentLocale);
  }, []);

  if (!pricingData) {
    return <div>Loading pricing...</div>;
  }

  const plans = [
    {
      name: 'Starter',
      key: 'starter',
      popular: false,
      description: 'Perfect for individual creators and small projects'
    },
    {
      name: 'Pro',
      key: 'pro',
      popular: true,
      description: 'Ideal for growing businesses and content creators'
    },
    {
      name: 'Premium',
      key: 'premium',
      popular: false,
      description: 'Complete solution for large-scale content production'
    }
  ];

  return (
    <section className="bg-white text-[#0d1117] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-2">
            Pricing Plans
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
              Perfect
            </span>{" "}
            Plan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the plan that best suits your needs and budget. Flexible pricing
            options designed to scale with your content creation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const planData = pricingData[plan.key];
            return (
              <div
                key={plan.key}
                className={`relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-[#0d1117]">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0d1117]">{planData.price}</span>
                    <span className="text-gray-500 text-sm">{planData.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {planData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  {planData.notIncluded?.map((feature, index) => (
                    <li key={`not-${index}`} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-red-500" />
                      </div>
                      <span className="text-gray-400 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:from-blue-600 hover:to-pink-600 shadow-md'
                      : 'bg-gray-50 text-[#0d1117] border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <a href='https://calendly.com/jaitanishq222/video-editing-consultation' target='_blank' className="px-8 py-3 text-blue-500">
            Get in Touch to Elevate Your Video Content Today!
          </a>
        </div>
      </div>
    </section>
  );
}