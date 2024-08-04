import React from 'react'
import CategoryItem from './CategoryItem'
import img2 from "../../assets/img2.png";
import Slider from "react-slick";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";


const Categories: React.FC = () => {

  const categories = [
    {img: img2, name: 'cat1'},
    {img: img2, name: 'cat2'},
    {img: img2, name: 'cat3'}
  ]


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

  return (
      <div className='max-w-[730px]'>
          <div className="slider-container h-full">
            <Slider {...settings}>
              {categories.map((item, i) => (
                <div key={i} className=" ">
                    <CategoryItem key={i} item={item}/>
                </div>
              ))}
            </Slider>
          </div>
      </div>
  )
}

export default Categories