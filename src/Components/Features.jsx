import React from 'react';
import { Calendar, DollarSign, Users, FileText, FolderOpen, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Project Planning & Scheduling',
      description: 'Create detailed schedules with Gantt charts, milestones, and dependencies. Keep everyone aligned on timelines.',
      benefits: ['Drag-and-drop scheduling', 'Critical path analysis', 'Resource leveling'],
    },
    {
      icon: DollarSign,
      title: 'Budget & Cost Control',
      description: 'Track every dollar with real-time budget updates, change orders, and automated cost forecasting.',
      benefits: ['Live budget tracking', 'Cost variance analysis', 'Invoice management'],
    },
    {
      icon: Users,
      title: 'Task & Resource Management',
      description: 'Assign tasks, manage crews, and track labor hours across multiple projects from one dashboard.',
      benefits: ['Crew scheduling', 'Time tracking', 'Equipment allocation'],
    },
    {
      icon: FileText,
      title: 'Site Reports & Daily Logs',
      description: 'Capture site conditions, progress photos, and daily reports from mobile devices in real-time.',
      benefits: ['Mobile reporting', 'Photo documentation', 'Weather logs'],
    },
    {
      icon: FolderOpen,
      title: 'Document & Drawing Management',
      description: 'Store, version, and share blueprints, contracts, and permits. Never lose another document.',
      benefits: ['Version control', 'Blueprint markup', 'Permission management'],
    },
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'Get instant visibility into project health with customizable dashboards and automated reports.',
      benefits: ['Executive dashboards', 'Custom reports', 'KPI tracking'],
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm">POWERFUL FEATURES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to closeout, BuildPro gives you complete control over every aspect of your construction projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={28} className="text-white" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Mobile-First Design for Field Teams
              </h3>
              <p className="text-lg text-blue-100 mb-6">
                Built specifically for construction professionals who need to work on the go. Full functionality on iOS and Android with offline mode.
              </p>
              <ul className="space-y-3">
                {['Work offline, sync later', 'Take photos and annotate', 'GPS location tracking', 'Voice notes and dictation'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                <div className="aspect-[9/16] bg-gradient-to-br from-white to-gray-200 rounded-xl shadow-2xl flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Mobile App Preview</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;