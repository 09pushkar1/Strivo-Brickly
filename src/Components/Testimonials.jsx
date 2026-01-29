import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Project Director',
      company: 'Summit Construction Group',
      image: 'MC',
      rating: 5,
      text: 'BuildPro cut our project coordination time by 40%. We now deliver projects consistently on schedule, and our team collaboration has never been better.',
      highlight: '40% faster coordination',
    },
    {
      name: 'Sarah Martinez',
      role: 'Operations Manager',
      company: 'Apex Builders Inc.',
      image: 'SM',
      rating: 5,
      text: 'We reduced cost overruns by 25% in our first quarter using BuildPro. The budget tracking and real-time reporting gives us complete financial visibility.',
      highlight: '25% cost reduction',
    },
    {
      name: 'David Thompson',
      role: 'Site Engineer',
      company: 'Metro Infrastructure',
      image: 'DT',
      rating: 5,
      text: 'Finally, a construction tool that field teams actually want to use. The mobile app is intuitive and works perfectly offline on site.',
      highlight: 'Field teams love it',
    },
    {
      name: 'Jennifer Park',
      role: 'CEO',
      company: 'Horizon Commercial Contractors',
      image: 'JP',
      rating: 5,
      text: 'Switching from spreadsheets to BuildPro was transformative. We manage 15 simultaneous projects with clarity and confidence now.',
      highlight: 'Manages 15 projects easily',
    },
    {
      name: 'Robert Williams',
      role: 'Senior PM',
      company: 'BuildTech Solutions',
      image: 'RW',
      rating: 5,
      text: 'The implementation was surprisingly quick. We were fully operational in 3 days with minimal training. Customer support has been exceptional.',
      highlight: 'Live in 3 days',
    },
    {
      name: 'Lisa Anderson',
      role: 'Finance Director',
      company: 'Cornerstone Development',
      image: 'LA',
      rating: 5,
      text: 'Having all project financials in one place with automated reporting has saved our accounting team 15 hours per week. ROI was immediate.',
      highlight: '15 hours saved weekly',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Trusted by Construction Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how construction teams are transforming their operations with BuildPro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-6">
                <span className="text-green-700 font-semibold text-sm">{testimonial.highlight}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;