import {  Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdGeneratingTokens } from "react-icons/md";
import Button from '../Button/Button';
import {Link} from 'react-router-dom'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
   const navigation = [
     { name: 'Home', to: '/', current: true },
     { name: 'About', to: '/about', current: false },
     { name: 'Tokens', to: '/tokens', current: false },
     { name: 'Contact', to: '/contact-us', current: false },
   ]
  return (
    <Disclosure as="nav" className="bg-[#00a951]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-start ms-10 sm:items-stretch sm:justify-start">
            <Link to='/' className="flex shrink-0 items-center cursor-pointer">
             <MdGeneratingTokens className='text-white w-8 h-8'/><span className='text-white'>Nadra Token</span>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-5 sm:space-x-0">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-white' : 'text-gray-300  hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                 
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white space-x-3">
             <Link to='/login'>
              <Button text="Login" className='cursor-pointer flex items-cent active:border active:border-lime-400 rounded-md duration-100 p-2'/>
             </Link> 
             <Link to='/sign-up'>
               <Button text="SignUp" className='cursor-pointer flex items-cent border-1 border-b-lime-300 active:border active:border-lime-400 rounded-md duration-100 p-2'/>
             </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


export default Header