import { useState } from 'react';
import { Search } from '../atoms/Search';
import { Logo } from '../atoms/Logo';
import { Menu } from '../molecules/Menu';
import { MobileMenuIcon } from '../molecules/MobileMenuIcon';
import { MobileMenu } from '../molecules/MobileMenu';

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
