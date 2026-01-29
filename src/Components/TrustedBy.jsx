import React, { useState, useEffect, useRef } from 'react';

const TrustedBy = () => {
  const companies = [
    { name: 'Turner Construction', width: 'w-32' },
    { name: 'Bechtel', width: 'w-28' },
    { name: 'Skanska', width: 'w-32' },
    { name: 'Kiewit', width: 'w-28' },
    { name: 'DPR Construction', width: 'w-36' },
    { name: 'Jacobs', width: 'w-28' },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Active Projects' },
    { value: 150, suffix: '+', label: 'Enterprise Clients' },
    { value: 5, prefix: '$', suffix: 'B+', label: 'Projects Managed' },
    { value: 99.9, suffix: '%', label: 'Customer Satisfaction' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(increment * currentStep, stat.value);

        setCounters((prev) => {
          const updated = [...prev];
          updated[index] = newValue;
          return updated;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  const formatValue = (value, stat) => {
    if (stat.suffix === '%') {
      return value.toFixed(1);
    }
    return Math.floor(value);
  };

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-8">
            Trusted by leading construction companies worldwide
          </p>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center group">
  {companies.map((company, index) => (
    <div
      key={index}
      className="flex items-center justify-center transition-opacity duration-300
                 group-hover:opacity-30 hover:!opacity-100"
    >
      <div
        className={`${company.width} h-12 rounded flex items-center justify-center
        bg-gradient-to-r from-blue-900 to-blue-800
        group-hover:from-blue-950 group-hover:to-blue-900
        hover:from-blue-400 hover:to-blue-500
        transition-all duration-300`}
      >
        <span className="text-white font-bold text-xs">
          {company.name}
        </span>
      </div>
    </div>
  ))}
</div>


        </div>

        {/* Trust Indicators with Animated Counters */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.prefix || ''}
                {formatValue(counters[index], stat)}
                {stat.suffix || ''}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;