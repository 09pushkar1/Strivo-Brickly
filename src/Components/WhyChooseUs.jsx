import React, { memo, useEffect, useRef } from 'react';
import { Award, Zap, Globe, Lock, Heart, TrendingUp } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion';

/* -------------------- Static Data -------------------- */

const reasons = [
  {
    icon: Award,
    title: 'Built for Construction',
    description:
      'Not generic project management software. Every feature is designed specifically for construction workflows, terminology, and challenges.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Zap,
    title: 'Easy for Site Engineers',
    description:
      'Your team can start using it immediately. Simple mobile interface designed for people in hard hats, not IT experts.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Globe,
    title: 'Mobile & Desktop Friendly',
    description:
      'Full functionality anywhere. Update from the site office, corporate headquarters, or your truck. Always in sync.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Lock,
    title: 'Secure & Cloud-Based',
    description:
      'Enterprise-grade security with ISO 27001 certification. Your data is encrypted, backed up daily, and always accessible.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: TrendingUp,
    title: 'Scales With Your Business',
    description:
      'Start with one project or 100. Add users as you grow. Infrastructure that handles everything from small contractors to large EPC firms.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Heart,
    title: 'World-Class Support',
    description:
      'Dedicated customer success team. Implementation support, training resources, and quick response times when you need help.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
];

const statsData = [
  { value: 500, suffix: '+', label: 'Companies' },
  { value: 5, prefix: '$', suffix: 'B+', label: 'Projects Managed' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

/* -------------------- Motion Variants -------------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const stat = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* -------------------- Optimized CountUp -------------------- */

const CountUp = memo(({ value, prefix = '', suffix = '', duration = 1.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, v => Math.round(v));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [isInView, value, duration, motionValue]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
});

/* -------------------- Component -------------------- */

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl"
      />

      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Construction Teams
            <span className="text-blue-600"> Choose Strivo-Brickly ERP</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand construction. Our platform combines industry expertise
            with modern technology to help you build better.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map(reason => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                variants={card}
                whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="relative group bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition border-2 border-gray-100 [perspective:1000px]"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 via-transparent to-purple-50 rounded-xl"
                />

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`inline-flex items-center justify-center w-14 h-14 ${reason.bgColor} rounded-xl mb-4`}
                >
                  <Icon className={reason.color} size={28} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA with Increment Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Trusted by Construction Leaders Worldwide
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {statsData.map(item => (
              <motion.div
                key={item.label}
                variants={stat}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold shadow text-center"
              >
                <div className="text-3xl font-extrabold">
                  <CountUp
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </div>
                <div className="text-sm mt-1">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
