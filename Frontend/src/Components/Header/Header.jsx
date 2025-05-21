import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdGeneratingTokens } from "react-icons/md";
import Button from "../Button/Button";
import { NavLink, Link, useLocation } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { useContext } from "react";
import { NadraTokenContext } from "../../Context/NadraTokenContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { user, role } = useContext(NadraTokenContext);
  const navigation = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    ...(user ? [{ name: "Tokens", to: "/tokens" }] : []),
    { name: "Contact", to: "/contact-us" },
    ...(role === "admin" ? [{ name: "Dashbaord", to: "/dashboard" }] : []),
  ];

  const handlLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/logOut",
        {},
        {
          withCredentials: true,
        }
      );
      toast.success(response?.data?.message || "Logout successful!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMsg);
    }
  };

  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Disclosure as="nav" className="bg-[#105b14]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex items-center justify-start ms-10 sm:items-stretch sm:justify-start">
              <Link
                to="/"
                className="flex shrink-0 items-center cursor-pointer"
              >
                <MdGeneratingTokens className="text-white w-8 h-8" />
                <span className="text-white">Nadra Token</span>
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-5 sm:space-x-0">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <NavLink
                        to={item.to}
                        key={item.name}
                        className={classNames(
                          isActive
                            ? "text-white"
                            : "text-gray-300 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white space-x-3">
              {user ? (
                <Button
                  text="LogOut"
                  className="cursor-pointer flex items-cent border-1 border-b-lime-300 active:border active:border-lime-400 rounded-md duration-100 py-1 px-3"
                  onClick={handlLogOut}
                />
              ) : (
                <Button
                  text="Login"
                  className="cursor-pointer flex items-cent border-1 border-b-lime-300 active:border active:border-lime-400 rounded-md duration-100 py-1 px-3"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                />
              )}
              <Login />
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                to={item.to}
                key={item.name}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? " text-white"
                    : "text-gray-300  hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

export default Header;
