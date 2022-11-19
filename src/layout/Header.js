import React from 'react'

function Header() {

  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
]
  return (
    <header>
      <nav className="items-center pt-5 px-4 mx-auto sm:px-8 sm:flex sm:space-x-6">
        <a href="javascript:void(0)">
          <img
            src="https://www.floatui.com/images/logo.svg"
            width={120}
            height={50}
            alt="Float UI logo"
          />
        </a>
        <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          {
            navigation.map((item, idx) => (
              <li className="text-gray-200" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))
          }
          <li>
            <a href="javascript:void(0)" className="flex items-center text-gray-200">
              Log In
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header