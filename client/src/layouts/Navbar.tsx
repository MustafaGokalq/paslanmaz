import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links = ['Anasayfa', 'Kurumsal', 'Ürünler', 'Video', 'Blog'];

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      {/* LOGO */}
      <div className='text-3xl font-bold'>
        LOGO
      </div>

      {/* HAMBURGER ICON */}
      <div className='md:hidden' onClick={toggleMenu}>
        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </div>

      {/* NAVIGATION LINKS */}
      <div className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-800 md:static md:flex-row md:bg-transparent transition-transform transform ${menuOpen ? 'translate-x-0 flex w-full h-full justify-start' : 'translate-x-full md:translate-x-0'}`}>
        <div className='flex flex-col md:flex-row md:items-center md:gap-x-10'>
          {links.map((link) => (
            <div
              key={link}
              className={`cursor-pointer ${
                activeLink === link ? 'bg-darkDanger' : 'bg-secondary'
              } text-white hover:bg-darkDanger p-2 rounded-lg flex justify-center items-center w-20`}
              onClick={() => handleSetActiveLink(link)}
            >
              <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* LANGUAGE */}
      <div className='hidden md:flex gap-x-5 justify-center items-center'>
        <div className='border w-0 h-10 border-white'></div>
        <div className='bg-darkDanger px-4 h-6 flex justify-center items-center rounded-xl cursor-pointer'>
          TR
        </div>
      </div>
    </div>
  );
};

export default Navbar;