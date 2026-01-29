import React from 'react';
import { AlertTriangle, Clock, DollarSign, FileText, Users } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Project Delays',
      description: 'Tasks slip through the cracks, deadlines are missed, and schedules fall apart without real-time visibility.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: DollarSign,
      title: 'Cost Overruns',
      description: 'Budget tracking in spreadsheets leads to unexpected expenses and profit erosion you discover too late.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: FileText,
      title: 'Manual Spreadsheets',
      description: 'Hours wasted updating Excel files, version confusion, and errors that compound across your projects.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Users,
      title: 'Poor Communication',
      description: 'Site teams and office staff work in silos. Critical updates get lost in WhatsApp groups and email threads.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="text-red-600" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Construction Projects Are Complex.
            <br />
            <span className="text-red-600">Your Software Shouldn't Be.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing time and money to outdated tools. These problems cost construction companies millions every year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${problem.bgColor} rounded-lg mb-4`}>
                  <IconComponent className={problem.color} size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-50 border-2 border-primary-200 rounded-lg p-6 max-w-2xl">
            <p className="text-lg text-gray-900">
              <span className="font-bold text-primary-600">BuildPro ERP</span> eliminates these bottlenecks with one integrated platform that brings your entire construction operation together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;