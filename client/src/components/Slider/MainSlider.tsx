import React, { useState } from 'react';

const MainSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const slider = [
    { index: 0, image: 'https://s3-alpha-sig.figma.com/img/1832/dcc0/d71e34a2e8e99d7d72159935b415c0d1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvWffgSJUq6hgrvoRjtJ9MSnim~WiUlxAm6JdufAILSa9duainSBfZO5C7iwBjHtZgs5Fojwkgwq5yymBtWswOp6uUcXYHAxkdfGscXKExwEjFR2pRAm0bVCoM4vJIOegsyrG~bRJjUajQ43AtCLsxWJrHHkIOGBI2KyPEZ89VPWuMHxjEzlEEGk4Sy5ObaHhU~vtWnGl-MlJS9tRq90BEJIh3O6pZ1o5w7C2yzODikqgvkVFrBTj70cBD8BqfX1Tp3VE4m~q6UN98B8AIgGXgg5-cpyshMHYCUcI19ME08OImkeKWUn5kGM0QDFzcpx6iKM-woB1RGRBomZTFLj-g__', title: 'Paslanmaz Karıştırıcı' },
    { index: 1, image: 'https://s3-alpha-sig.figma.com/img/b629/f094/13d93c300fb9a6dc99975be164c8e842?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVhFQ2kjODtF9RsqN31WPeBof4P39byvxw0w816LldzbQ~TRN~xcp9bTeddrhdJX9Ee6e8BBdgGvXqkLhil8TSiqGsv6yTu12EUyFszck6nMbLPntPUwYNkcQmNwm~PBmf79jINedVnJqu6Gqv8Ahdg-rwpazam6PpG6LY0xeVVXMJhcy6btpErd9iQIMeRBQBvpY506h0-NZH8MwaX5zJqwB7FETCLg4prPpSZDHoiW9D5PAFNUMn1FIfhTYZu7T0J0~zHxGop-FmHxhUkQCyNO~8DCsbTVpeoW1IdNnQVHKg698l9Lt1Px6Mg-R4a1n9bYODM6SyqQMJ6PGk~rVA__', title: 'Paslanmaz Çikolata Kazanı' },
    { index: 2, image: 'https://s3-alpha-sig.figma.com/img/457b/46ef/8260cd938d0bd2438bb40caf965a064c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CeXUCzmdQZnNQU2THRVLto~1GpeoaoBogdRjSvJBv1t~A8hBpvAk9yO3kI2LvBlKTM~XJh1wUOgihtLKAJ9ms-jwhaG3SqR2panL1IZ4ZxsaQGH~0T5y76nvKdNdGm0n~1uVYdd4NrFytstH2ZTbGAJUbXLC3HFkSDZ6yMiJCSUDHIqxZvUZ8qbQluKkXcvEQayl0gU86teEY-LRemwf2TSyKmpY~Hjur6pgLzqXl~n~Af4KlABqVwgE~ia0Zs6q~ZoAfvj7KlZN8CxalvHx9mvOiLXFZ~yHy8heNdGQVHb2-0hoyMHa7UD5kclk3cbIs3o6EPABMx4UeUCvwuIESg__', title: 'Paslanmaz Soğutma Tüneli' },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slider.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative h-[400px] shadow-lg rounded-lg overflow-hidden select-none'>
      {/* Slider Image */}
      <div className='h-full w-full'>
        <img
          src={slider[slideIndex].image}
          alt={slider[slideIndex].title}
          className='w-full object-center h-[300px]'
        />
      </div>

      {/* Slider Title */}
      <div className='absolute bottom-0 left-0 w-full bg-darkDanger text-white text-center p-4'>
        <h2 className='text-2xl font-bold'>{slider[slideIndex].title}</h2>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-darkDanger hover:bg-black transition-all text-white p-2 rounded-full'
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-darkDanger hover:bg-black transition-all text-white p-2 rounded-full'
      >
        &gt;
      </button>
    </div>
  );
};

export default MainSlider;