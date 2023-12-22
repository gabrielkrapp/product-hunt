const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a href={href} className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white">
      {children}
    </a>
);

export const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => (
    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <NavLink href="#">Produtos</NavLink>
        <NavLink href="#">Categorias</NavLink>
        <NavLink href="#">Sobre</NavLink>
    </div>
);