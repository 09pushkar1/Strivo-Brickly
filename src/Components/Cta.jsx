import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Smarter?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 500+ construction companies delivering projects on time and on budget. 
            Start your free 14-day trial today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg group shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg bg-white hover:bg-gray-50"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={20} />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={20} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={20} />
              <span>Setup in under 2 hours</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-2 flex-shrink-0" size={20} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-blue-500">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">2 Hours</div>
              <div className="text-blue-200">Average Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Happy Construction Teams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;