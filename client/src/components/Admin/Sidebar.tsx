import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
       <h2 className="font-bold text-center mb-4">Admin Panel</h2>
      <ul>
        <li className="hover:bg-gray-200 cursor-pointer p-2 rounded-md">Kategori 1</li>
        <li className="hover:bg-gray-200 cursor-pointer p-2 rounded-md">Kategori 2</li>
        <li className="hover:bg-gray-200 cursor-pointer p-2 rounded-md">Ürün İzleme</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
