import React from "react";
import "./layout.css";

/**
 * Zbytečný return...stačilo napsat const Layout = () => (<div>...</div>) nebo na jeden řádek bez ()
 */
const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
