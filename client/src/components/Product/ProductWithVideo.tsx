import React from 'react'
import ProductVideoItem from './ProductVideoItem'
import img1 from "../../assets/img1.png";
import Slider from "react-slick";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";


const ProductWithVideo: React.FC = () => {

    const productWithVideoDatas= [
        {img: img1, title: 'Başlık1', desc: 'Açıklama1 deneme1 deneme deneme deneme deneme'},
        {img: img1, title: 'Başlık2', desc: 'Açıklama2 deneme1 deneme deneme deneme deneme'},
        {img: img1, title: 'Başlık3', desc: 'Açıklama3 deneme1 deneme deneme deneme deneme'},
        {img: img1, title: 'Başlık4', desc: 'Açıklama4 deneme1 deneme deneme deneme deneme'},
        {img: img1, title: 'Başlık5', desc: 'Açıklama5 deneme1 deneme deneme deneme deneme'},
        {img: img1, title: 'Başlık6', desc: 'Açıklama6 deneme1 deneme deneme deneme deneme'},
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
    <div className=''>
         <div className="slider-container h-full">
            <Slider {...settings}>
              {productWithVideoDatas.map((item, i) => (
                <div key={i} className=" h-[200px] ">
                    <ProductVideoItem key={i} item={item}/>
                </div>
              ))}
            </Slider>
          </div>
        
    </div>
  )
}

export default ProductWithVideo