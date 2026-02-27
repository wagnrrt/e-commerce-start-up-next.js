import Brand from "@/components/ui/brand"
import { ChevronDown, ShoppingBag, Search, User } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black/60 flex flex-col text-white">
      {/* Navbar */}
      <nav className="flex my-10 mx-30 justify-between items-center">
        <div>
          <Brand className="h-6" />
        </div>
        <nav className="flex gap-12">
          <span className="cursor-pointer hover:opacity-80">Home</span>
          <span className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            Categories<ChevronDown size={16} />
          </span>
          <span className="cursor-pointer hover:opacity-80">Contact Us</span>
          <span className="cursor-pointer hover:opacity-80">Blog</span>
        </nav>
        <div className="flex gap-8 items-center">
          <div className="flex items-center cursor-pointer hover:opacity-80">
            <User size={20} /><ChevronDown size={16} />
          </div>
          <ShoppingBag size={20} className="cursor-pointer hover:opacity-80" />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col flex-1 gap-8.75 items-center justify-center pb-24">
        <h1 className="font-bold text-[45px] text-center max-w-199.25 leading-normal">
          Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
        </h1>
        <p className="text-base text-center text-[#cecccc] max-w-162.5 leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie
          feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla fringilla nunc in molestie feugiat
        </p>

        {/* Search Bar */}
        <div className="bg-black/15 border border-white/60 flex items-center justify-between pl-5 pr-2 py-2 rounded-[42px] w-86">
          <input
            type="text"
            placeholder="Search An Item"
            className="bg-transparent font-exo text-base text-[#cecccc] placeholder:text-[#cecccc] outline-none flex-1"
          />
          <button className="bg-[#282828] rounded-[24px] p-2.75 flex items-center justify-center shrink-0">
            <Search size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
