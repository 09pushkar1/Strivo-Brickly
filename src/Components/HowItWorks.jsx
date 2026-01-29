import React from 'react';
import { Rocket, Settings, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

/* Static data */
const steps = [
  {
    number: '01',
    icon: Rocket,
    title: 'Set Up Your Project',
    description:
      'Create your project in minutes. Add team members, upload drawings, set budgets, and define milestones.',
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
    description:
      'Assign tasks, track progress, and coordinate field teams. Everyone stays updated with real-time notifications.',
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
    description:
      'Monitor project health with live dashboards. Catch issues early and make data-driven decisions.',
    details: [
      'Real-time dashboards',
      'Automated reports',
      'Predictive analytics',
    ],
    color: 'from-green-500 to-green-700',
  },
];

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-white overflow-hidden">

      {/* ✨ Ambient Background Glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"
      />

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started in Three Simple Steps
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No lengthy setup or complex training. Start managing your projects better in less than 15 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* ✨ Animated Progress Line */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 origin-left bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 -z-10"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {steps.map(step => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={card}
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: -5,
                  }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="relative group [perspective:1000px]"
                >
                  {/* Step Badge */}
                  <div
                    aria-hidden
                    className="absolute -top-4 -left-4 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-2xl font-bold text-gray-700">
                      {step.number}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-2 border-gray-100 h-full">

                    {/* Icon */}
                    <motion.div
                      aria-hidden
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>

                    {/* ✨ Staggered List */}
                    <motion.ul
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      {step.details.map(detail => (
                        <motion.li
                          key={detail}
                          variants={listItem}
                          className="flex items-center gap-3"
                        >
                          <span
                            aria-hidden
                            className="w-2 h-2 bg-blue-500 rounded-full"
                          />
                          <span className="text-sm text-gray-700">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-1"
          >
            <div className="bg-white rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to streamline your projects?
              </h3>
              <p className="text-gray-600 mb-6">
                Start your free 14-day trial. No credit card required.
              </p>
              <button
                type="button"
                className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition"
              >
                <span className="relative z-10">Start Free Trial →</span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(HowItWorks);
