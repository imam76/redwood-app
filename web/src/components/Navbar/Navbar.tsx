const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>

          {/* Profile Icon */}
          <div className="flex items-center">
            <button className="text-gray-700 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
