import Brand from "@/components/ui/brand";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, ChevronDown, Instagram, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex flex-col sticky top-0 z-50">

        <div className="py-2 px-12 flex w-full justify-between text-sm">
          <div className="flex items-center gap-2 text-accent-foreground/70">
            <span >
              Follow us on
            </span>
            <Instagram className="hover:text-primary duration-200 h-5" />
          </div>

          <div className="flex items-center gap-5 text-accent-foreground/70">
            <Link href="#" className="hover:text-secondary-foreground">
              About Ecommerce
            </Link>
            <Link href="#" className="hover:text-secondary-foreground">
              Promo
            </Link>
            <Separator orientation="vertical" />
            <Link href="#" className="font-medium text-foreground">
              Sign Up
            </Link>
            <Separator orientation="vertical" />
            <Link href="#" className="font-medium text-foreground">
              Login
            </Link>
          </div>
        </div>

        <div className="py-3 px-12 border-y flex w-full justify-between gap-10">
          <div className="flex items-center font-semibold tracking-tight text-2xl">
            <Brand className="h-10" />
            <h1>Ecommerce.com</h1>
          </div>

          <div className="flex flex-1 rounded-lg border border-ring/80 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:bg-accent/60 text-accent-foreground/70 rounded-r-none group">
                  All Category
                  <ChevronDown className="transition-transform group-data-[state=open]:-rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" className="bg-ring/80" />
            <Search className="ml-3 text-accent-foreground/40 h-full" />
            <Input className="w-full border-none rounded-none placeholder:text-accent-foreground/50" placeholder="Search product or brand here..." />
          </div>

          <div className="flex gap-6 items-center text-gray-500">
            <ShoppingBag className="hover:text-primary duration-200" />
            <Bell className="hover:text-primary duration-200" />
          </div>

        </div>
      </header>
    </div>
  );
}
