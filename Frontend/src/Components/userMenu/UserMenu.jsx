import { useState, useRef, useEffect } from "react";
import { userImg } from "../../assets/img_index";
import { href, Link } from "react-router-dom";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { name: "Your Profile", href: "/your-profile" },
    { name: "Settings", href: "/setting" },
  ];

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev === null || prev === menuItems.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev === null || prev === 0 ? menuItems.length - 1 : prev - 1
      );
    } else if (e.key === "Enter" || e.key === " ") {
      if (open && activeIndex !== null) {
        setOpen(false);
        buttonRef.current?.focus();
        // handle click action if needed
      }
    }
  };

  return (
    <div className="relative ml-3 cursor-pointer" ref={menuRef}>
      <button
        type="button"
        className="relative flex rounded-full text-sm focus:ring-2 bg-white focus:ring-white focus:ring-offset-2 outline-none focus:outline-none"
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="sr-only">Open user menu</span>
        <img className="size-8 rounded-full" src={userImg} alt="user image" />
      </button>

      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`block px-4 py-2 text-sm text-gray-700 ${
                activeIndex === index ? "bg-gray-100" : ""
              }`}
              role="menuitem"
              tabIndex={-1}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
                // Handle menu action here if needed
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
