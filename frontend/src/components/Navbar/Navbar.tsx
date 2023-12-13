import { useState } from 'react';
import { Search } from './Search';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { MobileMenuIcon } from './MobileMenuIcon';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <Menu />
          <Search />
          <MobileMenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
};
