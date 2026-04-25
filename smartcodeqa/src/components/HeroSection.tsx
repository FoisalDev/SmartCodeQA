'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Logo } from '@/components/ui/Logo';

function RotatingLogo() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block z-10 overflow-hidden">
      <div className="relative w-44 h-44">
        <div className="absolute inset-0 rounded-full border-[2px] border-accent-blue/50 animate-spin-slow" />
        <div className="absolute inset-1 rounded-full border border-accent-cyan/40 animate-spin-reverse" />
        <div className="absolute inset-3 rounded-full border border-accent-blue/30 animate-spin-slow" style={{ animationDuration: '18s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo size="lg" breathing />
        </div>
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 176 176">
          <defs>
            <path id="circlePath" d="M 88, 88 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
          </defs>
          <text fontSize="11" fontWeight="700" fill="#3b82f6" dominantBaseline="middle" textAnchor="middle" style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 1))' }}>
            <textPath href="#circlePath" startOffset="0%">
              ✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦
            </textPath>
          </text>
        </svg>
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
        />
      </div>
    </div>
  );
}

function FloatingStatusCard({
  position,
  title,
  subtitle,
  icon,
  className
}: {
  position: string;
  title: string;
  subtitle: string;
  icon: 'check' | 'shield';
  className?: string;
}) {
  const isGreen = icon === 'check';
  const bgColor = isGreen ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)';
  const borderColor = isGreen ? 'rgba(16, 185, 129, 0.4)' : 'rgba(59, 130, 246, 0.4)';
  const iconBg = isGreen ? 'bg-accent-emerald/20' : 'bg-accent-blue/20';
  const iconColor = isGreen ? 'text-accent-emerald' : 'text-accent-blue';

  return (
    <div
      className={`absolute ${position} ${className} glass rounded-2xl p-3 sm:p-5 shadow-2xl cursor-pointer group z-20`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`w-10 sm:w-14 h-10 sm:h-14 ${iconBg} rounded-xl flex items-center justify-center`}>
          {icon === 'check' ? (
            <svg className={`w-5 sm:w-6 h-5 sm:h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className={`w-5 sm:w-6 h-5 sm:h-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )}
        </div>
        <div>
          <div className="text-sm sm:text-base font-bold text-text-primary">{title}</div>
          <div className={`text-xs font-medium ${iconColor}`}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative flex items-center pt-16 md:pt-20 overflow-hidden">
      <RotatingLogo />

      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
              <span className="text-sm text-accent-blue font-medium tracking-wide">
                Smart QA. Modern Engineering. Reliable Delivery.
              </span>
            </div>

            <h1 className="heading-xl">
              <span className="block">Build Faster.</span>
              <span className="block">Ship Better.</span>
              <span className="text-gradient block">Scale with Confidence.</span>
            </h1>

            <p className="text-text-secondary max-w-sm sm:max-w-xl leading-relaxed">
              SmartCodeQA helps businesses launch and grow reliable digital products through QA
              engineering, automation, AI integration, web development, mobile development, and
              emerging technology solutions.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link href="/contact" className="btn-primary group">
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary group">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 sm:pt-6">
              {[
                { value: '80+', label: 'Clients Supported' },
                { value: '8+', label: 'Specialists' },
                { value: 'Multi', label: 'Domain Expertise' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImagePlaceholder
              filename="1.png"
              alt="Dashboard Preview"
              aspectRatio="video"
              className="shadow-xl ring-1 ring-accent-blue/20"
            />

            <FloatingStatusCard
              position="top-2 right-0 sm:-top-6 sm:-right-6"
              title="All Systems"
              subtitle="Operational"
              icon="check"
              className="scale-[0.7] sm:scale-100"
            />

            <FloatingStatusCard
              position="-bottom-2 -left-0 sm:-bottom-6 sm:-left-6"
              title="Quality First"
              subtitle="99.9% Coverage"
              icon="shield"
              className="scale-[0.7] sm:scale-100"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce sm:bottom-8">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm text-text-muted uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-text-muted" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}