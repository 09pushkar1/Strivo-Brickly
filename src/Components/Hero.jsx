import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-pink-500 bg-opacity-20 backdrop-blur-sm rounded-full border border-pink-400 border-opacity-30">
              <span className="text-pink-300 font-semibold text-sm">One Platform for Office + Site Teams</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
              Deliver Projects{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                On-Time, On-Budget
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Complete construction management platform that gives you real-time visibility, streamlined coordination, and full control from planning to closeout.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="accent" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-600 border-opacity-30">
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">40%</div>
                <div className="text-sm text-gray-400">Faster Project Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">25%</div>
                <div className="text-sm text-gray-400">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gray-50">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Project Overview</div>
                  <div className="text-2xl font-bold text-gray-900">Downtown Office Complex</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Budget</div>
                    <div className="text-xl font-bold text-green-600">$2.4M / $2.5M</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Timeline</div>
                    <div className="text-xl font-bold text-blue-600">82%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-semibold text-gray-700">Active Tasks</div>
                    <div className="text-sm text-green-600 font-medium">On Track</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="flex-1 text-sm text-gray-600">Foundation Inspection</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="flex-1 text-sm text-gray-600">Steel Framework</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="flex-1 text-sm text-gray-600">Electrical Rough-in</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden lg:block absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Task Completed</div>
                  <div className="text-sm font-semibold text-gray-900">Site Survey</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Team Active</div>
                  <div className="text-sm font-semibold text-gray-900">12 Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;