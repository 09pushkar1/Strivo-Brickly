import React, { memo, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "./Button";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

/* -------------------- CountUp (Optimized) -------------------- */

const CountUp = memo(
  ({ value, suffix = "", prefix = "", decimals = 0, duration = 1.6 }) => {
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
        ease: "easeOut",
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

/* -------------------- Stats Data -------------------- */

const statsData = [
  { value: 2, suffix: " Hours", label: "Average Setup Time" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 500, suffix: "+", label: "Happy Construction Teams" },
];

/* -------------------- Motion Variants -------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* -------------------- Component -------------------- */

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">

      {/* ✨ Ambient Glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Build Smarter?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
        >
          Join 500+ construction companies delivering projects on time and on
          budget. Start your free 14-day trial today—no credit card required.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div variants={fadeUp} whileHover={{ y: -4 }}>
            <Button
              variant="accent"
              size="lg"
              className="text-lg group shadow-2xl"
            >
              Start Free Trial
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -4 }}>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg bg-white text-blue-700 hover:bg-gray-50"
            >
              Schedule a Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center text-blue-100"
        >
          {[
            "14-day free trial",
            "No credit card required",
            "Setup in under 2 hours",
            "Cancel anytime",
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center"
            >
              <CheckCircle
                className="text-green-400 mr-2 flex-shrink-0"
                size={20}
              />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-blue-500 grid md:grid-cols-3 gap-8"
        >
          {statsData.map(stat => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default memo(CTA);
