import ToggleTheme from "./ToggleTheme"

const Header = ({ user }) => {
  return (
    <header className="p-5 dark:[##000511] flex justify-between items-center border-b-2 border-[#1B1B1B]">
      <span className="text-gray-100">Olá, { user?.name  || "Usuário" }</span>
      <nav className="hidden md:block">
      <ul className="list-none flex items-center justify-center space-x-9">
       <li className="text-dark-100 dark:text-blue-50">
            Para o seu negócio
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Sobre nós
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Dúvidas
        </li>
        <li className="text-dark-100 dark:text-blue-50" >
          Login
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Create your account
        </li>
        </ul>
      </nav>
      <ToggleTheme/>
    </header>
  )
}

export default Header
