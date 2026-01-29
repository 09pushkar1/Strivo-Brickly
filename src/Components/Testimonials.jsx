import React, { memo, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion';

/* -------------------- Static Data -------------------- */

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Project Director',
    company: 'Summit Construction Group',
    image: 'MC',
    rating: 5,
    text:
      'BuildPro cut our project coordination time by 40%. We now deliver projects consistently on schedule, and our team collaboration has never been better.',
    highlight: '40% faster coordination',
  },
  {
    name: 'Sarah Martinez',
    role: 'Operations Manager',
    company: 'Apex Builders Inc.',
    image: 'SM',
    rating: 5,
    text:
      'We reduced cost overruns by 25% in our first quarter using BuildPro. The budget tracking and real-time reporting gives us complete financial visibility.',
    highlight: '25% cost reduction',
  },
  {
    name: 'David Thompson',
    role: 'Site Engineer',
    company: 'Metro Infrastructure',
    image: 'DT',
    rating: 5,
    text:
      'Finally, a construction tool that field teams actually want to use. The mobile app is intuitive and works perfectly offline on site.',
    highlight: 'Field teams love it',
  },
  {
    name: 'Jennifer Park',
    role: 'CEO',
    company: 'Horizon Commercial Contractors',
    image: 'JP',
    rating: 5,
    text:
      'Switching from spreadsheets to BuildPro was transformative. We manage 15 simultaneous projects with clarity and confidence now.',
    highlight: 'Manages 15 projects easily',
  },
  {
    name: 'Robert Williams',
    role: 'Senior PM',
    company: 'BuildTech Solutions',
    image: 'RW',
    rating: 5,
    text:
      'The implementation was surprisingly quick. We were fully operational in 3 days with minimal training. Customer support has been exceptional.',
    highlight: 'Live in 3 days',
  },
  {
    name: 'Lisa Anderson',
    role: 'Finance Director',
    company: 'Cornerstone Development',
    image: 'LA',
    rating: 5,
    text:
      'Having all project financials in one place with automated reporting has saved our accounting team 15 hours per week. ROI was immediate.',
    highlight: '15 hours saved weekly',
  },
];

/* -------------------- Stats Data -------------------- */

const statsData = [
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 4.8, suffix: '/5', decimals: 1, label: 'Average Rating' },
  { value: 150, suffix: '+', label: 'Enterprise Clients' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

/* -------------------- Motion Variants -------------------- */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* -------------------- Optimized CountUp -------------------- */

const CountUp = memo(
  ({ value, suffix = '', prefix = '', decimals = 0, duration = 1.8 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useMotionValue(0);
    const formatted = useTransform(motionValue, v =>
      v.toFixed(decimals)
    );

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
        <motion.span>{formatted}</motion.span>
        {suffix}
      </span>
    );
  }
);

/* -------------------- Component -------------------- */

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Construction Leaders
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how construction teams are transforming their operations with Strivo-Brickly.
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
          {testimonials.map(t => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100 relative"
            >
              <Quote
                size={48}
                className="absolute top-6 right-6 text-blue-600 opacity-10"
              />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6">“{t.text}”</p>

              <div className="inline-block px-3 py-1 bg-green-100 rounded-full mb-6">
                <span className="text-green-700 font-semibold text-sm">
                  {t.highlight}
                </span>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t.image}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                  <div className="text-sm text-gray-500">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with Increment Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            {statsData.map(stat => (
              <div key={stat.label}>
                <div className="text-5xl font-bold mb-2">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default memo(Testimonials);
