// components/CTAButton.tsx
import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  primary?: boolean;
}

const CTAButton = ({ text, href, primary = true }: CTAButtonProps) => {
  return (
    <Link 
      href={href}
      className={`inline-block px-8 py-3 rounded-md font-medium text-center ${
        primary 
          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
          : 'bg-gray-700 hover:bg-gray-600 text-white'
      }`}
    >
      {text}
    </Link>
  );
};

export default CTAButton;