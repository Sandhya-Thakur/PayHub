// components/HeroSection.tsx
import Image from "next/image";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PayHub: Payments Simplified
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              PayHub is an AI SaaS payment platform for seamless transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton text="Start Free" href="#start-free" primary={true} />
              <CTAButton
                text="Unified Subscription"
                href="#subscription"
                primary={false}
              />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/landing1.jpeg"
                alt="Payment Terminal"
                width={400}
                height={500}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <svg
            className="animate-bounce w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Second Hero Section with gray background */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "#a9a9a9" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/landingrm.png"
                alt="People celebrating with confetti"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-3xl font-bold mb-6 text-black">
              PayHub: Revolutionizing Payments
            </h3>
            <p className="text-lg md:text-lg text-gray-800 mb-8">
              PayHub offers an AI-driven payment platform with zero transaction
              fees and instant global payments, simplifying financial services
              for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                text="Start Free Subscription"
                href="#start-free"
                primary={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Third Section with PayHub's Payment Ecosystem */}

      <section
        className="py-16 md:py-24 relative"
        style={{ backgroundColor: "#a9a9a9" }}
      >
        {/* Sleek black line at the top */}
        <div className="absolute top-0 left-0 w-full h-0.25 bg-gray-500"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/landing3.png"
                alt="Person using PayHub mobile app"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              PayHub's Payment Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              PayHub is the future of AI-driven payments, providing a secure,
              accessible, and decentralized platform for global financial
              transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                text="Explore PayHub Features"
                href="#features"
                primary={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
