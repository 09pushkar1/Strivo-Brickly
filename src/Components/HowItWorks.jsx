import React from 'react';
import { Rocket, Settings, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Rocket,
      title: 'Set Up Your Project',
      description: 'Create your project in minutes. Add team members, upload drawings, set budgets, and define milestones.',
      details: [
        'Import existing schedules',
        'Invite team members instantly',
        'Upload documents & drawings',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Manage Teams & Execution',
      description: 'Assign tasks, track progress, and coordinate field teams. Everyone stays updated with real-time notifications.',
      details: [
        'Assign tasks to teams',
        'Track daily progress',
        'Coordinate site activities',
      ],
      color: 'from-purple-500 to-purple-700',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Track Progress in Real-Time',
      description: 'Monitor project health with live dashboards. Catch issues early and make data-driven decisions.',
      details: [
        'Real-time dashboards',
        'Automated reports',
        'Predictive analytics',
      ],
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 rounded-full mb-4">
            <span className="text-accent-700 font-semibold text-sm">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Get Started in Three Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No lengthy setup or complex training. Start managing your projects better in less than 15 minutes.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 -z-10"></div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-2xl font-bold text-gray-700">{step.number}</span>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group-hover:border-primary-200 h-full">
                    <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-1">
            <div className="bg-white rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to streamline your projects?
              </h3>
              <p className="text-gray-600 mb-6">
                Start your free 14-day trial. No credit card required.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Free Trial →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;