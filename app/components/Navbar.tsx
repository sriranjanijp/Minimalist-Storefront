import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-[#DA627D] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter text-black">
              EROS<span className="text-[#6A243E]">PSYCHE</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-[#450920] hover:text-[#FFEBEC]">New Arrivals</Link>
            <Link href="/" className="text-sm font-medium text-[#450920] hover:text-[#FFEBEC]">Apparel</Link>
            <Link href="/" className="text-sm font-medium text-[#450920] hover:text-[#FFEBEC]">Accessories</Link>
          </div>

            <div className="flex items-center space-x-6">
              <Link href="/cart" className="group flex items-center p-2">
                <span className="text-[15px] font-bold tracking-[0.2em] uppercase text-[#450920] hover:text-[#FFEBEC]">
                  Cart
                </span>
              </Link>
            </div>

        </div>
      </div>
    </nav>
  );
}