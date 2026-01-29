import React from 'react';
import { Award, Zap, Globe, Lock, Heart, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Built for Construction',
      description: 'Not generic project management software. Every feature is designed specifically for construction workflows, terminology, and challenges.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Zap,
      title: 'Easy for Site Engineers',
      description: 'Your team can start using it immediately. Simple mobile interface designed for people in hard hats, not IT experts.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Globe,
      title: 'Mobile & Desktop Friendly',
      description: 'Full functionality anywhere. Update from the site office, corporate headquarters, or your truck. Always in sync.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Lock,
      title: 'Secure & Cloud-Based',
      description: 'Enterprise-grade security with ISO 27001 certification. Your data is encrypted, backed up daily, and always accessible.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: TrendingUp,
      title: 'Scales With Your Business',
      description: 'Start with one project or 100. Add users as you grow. Infrastructure that handles everything from small contractors to large EPC firms.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Heart,
      title: 'World-Class Support',
      description: 'Dedicated customer success team. Implementation support, training resources, and quick response times when you need help.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Construction Teams
            <span className="text-primary-600"> Choose BuildPro ERP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand construction. Our platform combines industry expertise with modern technology to help you build better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-200"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${reason.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={reason.color} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 500+ Construction Companies Already Building Smarter
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            From small contractors to large infrastructure developers, teams trust BuildPro ERP to deliver projects on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold">
              500+ Companies
            </div>
            <div className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold">
              $5B+ Projects Managed
            </div>
            <div className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold">
              98% Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;