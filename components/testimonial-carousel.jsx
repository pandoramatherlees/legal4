'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 6 seconds
  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 6000);
  }, [total]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
      stopTimer();
      startTimer();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
      stopTimer();
      startTimer();
    }
  };

  return (
    <div
      ref={containerRef}
      className="md:hidden"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      onFocus={stopTimer}
      onBlur={startTimer}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div aria-live="polite" aria-atomic="true">
        <div className="bg-white/[0.05] border border-white/[0.08] rounded-md p-7 flex flex-col min-h-[200px]">
          <div className="w-6 h-[2px] bg-gold/60 mb-5" />
          <p className="text-white/80 text-[0.88rem] leading-[1.7] italic flex-1 mb-5">
            &quot;{testimonials[current].q}&quot;
          </p>
          <p className="text-gold/70 text-[0.75rem] font-semibold tracking-[0.02em]">
            &mdash; {testimonials[current].a}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5 px-1">
        <button
          onClick={() => {
            prev();
            stopTimer();
            startTimer();
          }}
          className="p-2 rounded-sm text-white/60 hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                stopTimer();
                startTimer();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-gold w-5'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1} of ${total}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            next();
            stopTimer();
            startTimer();
          }}
          className="p-2 rounded-sm text-white/60 hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
