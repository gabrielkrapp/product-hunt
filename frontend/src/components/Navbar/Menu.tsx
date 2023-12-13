const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className="py-2 px-10 text-gray-700 font-semibold hover:text-blue-800 transition duration-300">
    {children}
  </a>
);

export const Menu = () => {
  return (
    <div className="hidden md:flex items-center justify-center flex-1">
      <NavLink href="#">Produtos</NavLink>
      <NavLink href="#">Categorias</NavLink>
      <NavLink href="#">Sobre</NavLink>
    </div>
  )
}