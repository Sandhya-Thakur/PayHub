// components/TrustedSection.tsx
import React from 'react';

const TrustedSection = () => {
  return (
    <section className="py-16 bg-[#161616] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Trusted by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {/* FinTech Co Logo */}
          <div className="h-12 md:h-16">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="30" height="30" rx="4" fill="#4F46E5" />
              <path d="M15 20H25M20 15V25" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M40 15H110" stroke="white" strokeWidth="2" />
              <path d="M45 25H105" stroke="white" strokeWidth="1.5" />
              <path d="M50 20H100" stroke="white" strokeWidth="1" />
              <text x="42" y="14" fontFamily="Arial" fontSize="10" fill="white">FINTECH</text>
            </svg>
          </div>

          {/* Global Pay Logo */}
          <div className="h-12 md:h-16">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="15" fill="#22C55E" />
              <path d="M15 20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20C25 22.7614 22.7614 25 20 25" stroke="white" strokeWidth="2" />
              <path d="M20 25V15" stroke="white" strokeWidth="2" />
              <text x="40" y="24" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white">GlobalPay</text>
            </svg>
          </div>

          {/* Secure Transactions Logo */}
          <div className="h-12 md:h-16">
            <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="20" height="20" rx="10" fill="#F59E0B" />
              <path d="M20 15V25" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 20H25" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M40 16H120" stroke="white" strokeWidth="1.5" />
              <path d="M40 24H120" stroke="white" strokeWidth="1.5" />
              <text x="40" y="22" fontFamily="Arial" fontSize="10" fill="white">SECURE TRANSFERS</text>
            </svg>
          </div>

          {/* NextGen Finance Logo */}
          <div className="h-12 md:h-16">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,5 30,20 20,35 10,20" fill="#EC4899" />
              <text x="40" y="17" fontFamily="Arial" fontSize="8" fill="white">NEXT GEN</text>
              <text x="40" y="27" fontFamily="Arial" fontSize="8" fill="white">FINANCE</text>
              <path d="M40 20H110" stroke="white" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;