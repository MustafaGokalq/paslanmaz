import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<boolean>(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const links = ['Anasayfa', 'Kurumsal', 'Ürünler', 'Video', 'Iletişim'];

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const resetState = () => {
    setLanguage(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        resetState();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center justify-between p-4 text-black border-b-2 border-darkDanger relative z-20'>
      {/* LOGO */}
      <div className='text-4xl font-bold font-gemunu'>
        <Link to={'/anasayfa'}>PASLANMAZ</Link>
      </div>

      {/* HAMBURGER ICON */}
      <div className='md:hidden z-20' onClick={toggleMenu}>
        <div>
          {menuOpen ? <HiX size={28} onClick={() => setMenuOpen(false)}/> : <HiMenu size={28} />}
        </div>
      </div>

      {/* NAVIGATION LINKS */}
      <div className={`fixed inset-0 flex flex-col items-start justify-start pt-16 md:pt-0 md:static md:flex-row md:bg-transparent transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <div className='fixed right-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col items-center p-4 md:static gap-x-10 md:flex-row md:w-auto md:shadow-none md:bg-transparent'>
          {links.map((link, i) => (
            <>
            <div
              key={i}
              className={`cursor-pointer ${
                activeLink === link ? 'bg-darkDanger' : 'bg-darkSecondary'
              } text-white hover:bg-darkDanger transition-all p-2 rounded-lg flex justify-center items-center w-20 mb-2 md:mb-0`}
              onClick={() => handleSetActiveLink(link)}
            >
              <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </div>
            <div className=' hidden md:block border w-0 h-12 border-darkDanger'></div>
            </>
          ))}
        </div>
      </div>

      {/* LANGUAGE */}
      <div ref={languageMenuRef} className='hidden md:flex gap-x-5 justify-center items-center relative' onClick={() => setLanguage(!language)}>
        <div className='border w-0 h-10 border-darkDanger'></div>
        <div className='bg-darkDanger text-white px-4 h-6 flex justify-center items-center rounded-xl cursor-pointer'>
          TR
        </div>
        {
          language && (
            <div className='absolute top-10 bg-black bg-opacity-90 rounded text-white font-bold border w-32 z-50'>
              <ul className='flex justify-center items-center flex-col cursor-pointer'>
                <li className='w-full hover:bg-darkDanger transition-all'>En</li>
                <li className='w-full hover:bg-darkDanger transition-all'>Fr</li>
                <li className='w-full hover:bg-darkDanger transition-all'>De</li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;