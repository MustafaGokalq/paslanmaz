import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import Slider from "react-slick";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import './slider.css'


interface IImage {
  img: string;
  title: string;
}

const images: IImage[] = [
  { img: img1, title: "Soğutma Tüneli Endüstiriyel" },
  { img: img2, title: "Soğutma Tüneli Endüstiriyel2" },
  { img: img3, title: "Soğutma Tüneli Endüstiriyel3" },
  { img: img4, title: "Soğutma Tüneli Endüstiriyel4" },
  { img: img5, title: "Soğutma Tüneli Endüstiriyel5" },
];

const MainSlider: React.FC = () => {
  const [activeImage, setActiveImage] = useState<IImage>(images[0]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      }
    ]
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <FaChevronCircleRight className={`${className} custom-prev-arrow text-darkDanger hover:text-black`} onClick={onClick} style={{ ...style, display: "block", background: "" }}/>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <FaChevronCircleLeft className={`${className} custom-prev-arrow text-darkDanger hover:text-black`} onClick={onClick} style={{ ...style, display: "block", background: "" }}/>
    );
  }

  const handleImageClick = (item: IImage) => {
    setActiveImage(item);
  };

  return (
    <div className="relative border-2 border-black rounded-3xl bg-black bg-opacity-20 shadow shadow-black md:w-[574px]">
      <div className="w-full h-full flex justify-center items-center">
        <img src={activeImage.img} alt={activeImage.title} className="h-[300px]" />
      </div>

      <div className="slider-container w-full">
        <Slider {...settings}>
          {images.map((item, i) => (
            <div key={i} className={`border-2 border-black p-2 rounded-lg w-16 h-16 flex justify-center bg-black bg-opacity-20 mx-4 items-center cursor-pointer ${activeImage === item ? "border-darkDanger border-2" : ""}`} onClick={() => handleImageClick(item)}>
              <img src={item.img} alt={item.title} className="w-full h-full"/>
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute top-0 left-0 right-0 w-full bg-black bg-opacity-30 rounded-t-2xl flex justify-center items-center px-4 text-darkDanger font-bold text-2xl">
        <h2>{activeImage.title}</h2>
      </div>
    </div>
  );
};

export default MainSlider;
