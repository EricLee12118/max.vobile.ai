import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex items-start gap-12 border-t border-gray-800 bg-gray-900/50 backdrop-blur-xl px-12 py-10 text-base font-medium leading-relaxed">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Image
          src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
          alt="Vobile Logo"
          width={140}
          height={36}
          className="h-9 w-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-5">
        <div className="text-gray-300 text-sm leading-relaxed">
          Powered by Vobile. MAX is powered by Emmy award-winning Vobile (SEHK: 3738). A worldwide leader in Software-as-a-Service for online video content protection and monetization. Its best-in-class SaaS platforms are widely used by movie studios, television networks, and record labels, enabling effective content protection for rightsholders and accelerating their revenue growth in the digital economy. Vobile has global operations across continents in North America, Asia, Australia and Europe. To learn more, visit{" "}
          <a 
            href="https://www.vobile.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
          >
            Vobile.com
          </a>
        </div>
        
        <div>
          <Link 
            href="#privacy" 
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex-shrink-0 space-y-4 text-right">
        <div className="text-white font-semibold text-sm uppercase tracking-wider">
          FOLLOW US
        </div>
        
        <div className="flex justify-end space-x-4">
          <a 
            href="https://www.linkedin.com/company/vobile/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800/70 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </a>
          
          <a 
            href="https://x.com/vobile?s=21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800/70 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
            aria-label="Twitter/X"
          >
            <TwitterIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}