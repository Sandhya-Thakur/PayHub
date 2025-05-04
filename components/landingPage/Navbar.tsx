// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 w-full max-w-7xl mx-auto px-6 ">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={"/logopayhub2.png"}
            alt={"payHubLogo"}
            width={80}
            height={40}
            className="rounded-b-full"
          />
        </Link>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link href="#how-it-works" className="text-white hover:text-gray-300">
          How it works
        </Link>
        <Link href="#how-to-use" className="text-white hover:text-gray-300">
          How to use
        </Link>
        <Link href="#blog" className="text-white hover:text-gray-300">
          Blog
        </Link>
        <Link href="#about-us" className="text-white hover:text-gray-300">
          About us
        </Link>
        <Link href="#contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>

      <div>
        <Link
          href="#join-us"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Join Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
