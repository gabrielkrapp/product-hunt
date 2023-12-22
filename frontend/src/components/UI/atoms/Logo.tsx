import logo from '../../assets/logo.png'

export const Logo = () => {
  return (
    <a href='#' className="flex items-center">
      <img src={logo} alt="Logo" className="h-12 w-12" />
    </a>
  )
}