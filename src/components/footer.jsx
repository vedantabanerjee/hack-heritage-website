import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="bg-[#0f0f0f] text-white">
        <footer
        className="w-full py-8 px-4 md:px-8 bg-[#0f0f0f] border-t border-[#1e1e1e]">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-[#a0a0a0]">&copy; 2024 H4ckHerit4ge. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-[#8b5cf6]" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#8b5cf6]" prefetch={false}>
              About the Devs
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer