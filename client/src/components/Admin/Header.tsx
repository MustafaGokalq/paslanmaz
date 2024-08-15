import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../../image/logo1.jpg"

function Header() {
  return (
    <header className="bg-gray-200 p-2 flex justify-between">
      <img src={logo1} className='w-16 h-16' alt="Logo" />
      <nav className='pt-4'>
        <ul className="flex space-x-4">
          <li>
            <Link to="/anasayfa">Anasayfa</Link>
          </li>
          <li>
            <Link to="/kurumsal">Kurumsal</Link>
          </li>
          <li>
            <Link to="/ürünler">Ürünler</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/iletişim">İletişim</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
