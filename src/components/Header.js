import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "lucide-react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setIsLoggedIn(true);
    setUserName(name);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  const navItems = [
    { name: "Home", icon: "🏠", path: "/" },
    { name: "About Us", icon: "ℹ️", path: "/about" },
    { name: "Contact", icon: "📞", path: "/contact" },
    { name: "Cart", icon: "🛒", path: "/cart" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 ">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={LOGO_URL}
              alt="logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="flex-grow flex justify-center items-center space-x-6">
            {navItems.slice(0, 3).map((item) => (
              <NavItem
                key={item.name}
                {...item}
                isActive={location.pathname === item.path}
              />
            ))}

            {/* Cart Item with Badge */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cart"
                className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                🛒 Cart
              </Link>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs font-bold w-6 h-6 flex items-center justify-center border-2 border-white">
                  {cartItems.length}
                </span>
              )}
            </motion.div>
          </nav>

          {/* Login/Logout Button */}
          {!isLoggedIn ? (
            <button
              onClick={() => setShowLoginForm(true)}
              className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 transition duration-300 ease-in-out rounded-full border-2 border-blue-600 hover:border-blue-800"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              <span className="text-xl">👋</span>
              <span className="text-sm">Hey, {userName}!</span>
              <button
                onClick={handleLogout}
                className="text-xs text-white hover:text-yellow-300 ml-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Login Form */}
      <AnimatePresence>
        {showLoginForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-2xl relative max-w-sm w-full"
            >
              <button
                onClick={() => setShowLoginForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <XCircle size={28} />
              </button>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                Login to Your Account
              </h2>
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
                >
                  Login
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavItem = ({ name, icon, path, isActive }) => (
  <Link to={path}>
    <motion.div
      className={`px-4 py-2 rounded-full font-medium text-sm flex items-center space-x-2 transition-colors duration-300 ${
        isActive
          ? "bg-gradient-to-r from-orange-400 to-red-500 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </motion.div>
  </Link>
);

export default Header;
