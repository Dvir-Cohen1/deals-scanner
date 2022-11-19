import React from 'react'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#3B82F6',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



function Header() {
  return (
    <header>
      <nav className="items-center pt-5 px-4 mx-auto sm:px-8 sm:flex sm:space-x-6">
        <a href="/">
          <img
            src="https://www.floatui.com/images/logo.svg"
            width={120}
            height={50}
            alt="Float UI logo"
          />
        </a>

        <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
          <a href="/" className="px-2.5 py-2 text-white transition-colors duration-150 transform rounded-lg dark:text-gray-200  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-700 md:mx-2">Careers</a>
          <a href="/" className="px-2.5 py-2 text-white transition-colors duration-150 transform rounded-lg dark:text-gray-200  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-700 md:mx-2">Customers</a>
          <a href="/" className="px-2.5 py-2 text-white transition-colors duration-150 transform rounded-lg dark:text-gray-200  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-700 md:mx-2">Contact</a>
          <a href="#Pricing" className="px-2.5 py-2 text-white transition-colors duration-150 transform rounded-lg dark:text-gray-200  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-700 md:mx-2">Pricing</a>
        </div>

        <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          <li>
            <FormGroup>
              <Tooltip title="Change Theme Mode" placement="bottom" TransitionComponent={Zoom}>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                />
              </Tooltip>
            </FormGroup>

          </li>
          <li>
            <div className="relative mt-4 md:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>

              <input type="text" className="bg-transparent w-full py-2 pl-10 pr-4 text-gray-700 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500" placeholder="Search" />
            </div>
          </li>
          <li>
            <a href="/" className="flex items-center text-gray-200">
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