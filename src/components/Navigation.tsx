import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/basic-animations", label: "Basic Animations" },
    { path: "/gestures", label: "Gestures" },
    { path: "/variants", label: "Variants" },
    { path: "/layout-animations", label: "Layout Animations" },
    { path: "/scroll-animations", label: "Scroll Animations" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40 min-h-screen">
      <div className="container mx-auto px-4 py-3 w-50">
        <div className="flex flex-col items-center gap-5">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-blue-600"
          >
            Motion
          </Link>

          <div className="hidden md:flex flex-col space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3 py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-100 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
