import React, { ReactNode } from 'react';
import NavBar from './NavBar'; // Update the import path based on your project structure
import '../styles/Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{}{children}</div>
    </div>
  );
};

export default Layout;