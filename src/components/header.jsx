import { Button } from "@/components/ui/button"

import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <header className="w-full py-6 px-4 md:px-8 flex items-center justify-between">
        <Link
          href="#"
          className="text-2xl font-bold tracking-wider"
          prefetch={false}
        >
          <BoltIcon className="w-8 h-8 mr-2 inline-block" />
          H4ckHerit4ge
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:text-[#8b5cf6]" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:text-[#8b5cf6]" prefetch={false}>
            Prizes
          </Link>
          <Link href="#" className="hover:text-[#8b5cf6]" prefetch={false}>
            Sponsors
          </Link>
          <Link href="#" className="hover:text-[#8b5cf6]" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
    </div>
  );
}

export default Header;

function BoltIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>)
    );
}
function MenuIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>)
    );
  }