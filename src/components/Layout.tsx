import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { AnimatePresence } from "motion/react";

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex bg-gray-50">
      <Navigation />

      <AnimatePresence mode="wait">
        <main className="flex-1" key={location.pathname}>
          <Outlet />
        </main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
