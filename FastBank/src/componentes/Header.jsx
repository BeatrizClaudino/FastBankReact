import ToggleTheme from "./ToggleTheme"

const Header = ({ user }) => {
  return (
    <div className="p-5  sm:rounded-xl dark:[##000511] flex justify-between items-center">
      <span className="text-gray-100">Olá, { user?.name  || "Usuário" }</span>
      <ul className="flex">
       <li className="text-dark-100 dark:text-blue-50">
            Para o seu negócio
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Sobre nós
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Dúvidas
        </li>
        
      </ul>
      <ToggleTheme />
    </div>
  )
}

export default Header