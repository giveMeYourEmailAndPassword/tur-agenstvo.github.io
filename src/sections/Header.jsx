import { Link } from "react-router-dom";
import { navItems } from "./data";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Header() {
  return (
    <nav className="bg-zinc-900 p-4 shadow-sm fixed top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img src="/img/logo-2.0.png" alt="LOGO" class="h-12" />
          </a>
        </div>

        <ul className="flex space-x-4 text-xl roboto-regular items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-white transition-colors duration-300 hover:text-gray-200"
              >{item.label}</Link>
            </li>
          ))}

          <div className="vertical-line"></div>
          <li className="mt-1">
            <SignedOut>
              <SignInButton className="button bg-zinc-600 text-white p-3 pt-1 pb-1 text-lg rounded-full transition-colors duration-300 hover:bg-zinc-700">
                Войти
              </SignInButton>
            </SignedOut>
            <SignedIn className="button bg-zinc-600 text-white p-3 pt-1 pb-1 text-lg rounded-full transition-colors duration-300 hover:bg-zinc-700" >
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </div>
    </nav>
  );
}