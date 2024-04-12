import { Poppins } from 'next/font/google';
import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={poppins.className}>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default Layout;
