export default function Header() {
  return (
    <nav className="bg-zinc-900 p-4 shadow-sm fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div clasName="flex items-center">
          <img src="img/logo-2.0.png" alt="LOGO" class="h-12" />
        </div>

        <ul className="flex space-x-4 text-xl roboto-regular items-center">
          <li>
            <a
              href="#"
              className="text-white transition-colors duration-300 hover:text-gray-200"
            >Главная</a
            >
          </li>
          <li>
            <a
              href="#tours"
              className="text-white transition-colors duration-300 hover:text-gray-200"
            >Туры</a
            >
          </li>
          <li>
            <a
              href="#"
              className="text-white transition-colors duration-300 hover:text-gray-200"
            >О нас</a
            >
          </li>
          <li>
            <a
              href="#"
              className="text-white transition-colors duration-300 hover:text-gray-200"
            >Контакты</a
            >
          </li>
          <div class="vertical-line"></div>
          <li>
            <button
              className="button bg-zinc-600 text-white p-3 pt-1 pb-1 text-lg rounded-full transition-colors duration-300 hover:bg-zinc-700"
            >
              Войти
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}