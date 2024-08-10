import React, { useState } from 'react'
import img5 from "../assets/img5.png"
import img4 from "../assets/img4.png"
import img3 from "../assets/img3.png"
import img2 from "../assets/img2.png"

const ProductDetail: React.FC = () => {
    const subImages = [
        {img: img5, id: 0},
        {img: img4,id: 1},
        {img: img3,id: 2},
        {img: img2,id: 3},
    ];
    const [activeImage, setActiveImage] = useState<any>(subImages[0].img);
    const [subDesc, setSubDesc] = useState([
        {title: 'Kazan Ne İşe Yarar', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam harum asperiores voluptatum, pariatur minima ab '},
        {title: 'Kazan Ne İşe Yarar', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam harum asperiores voluptatum, pariatur minima ab '},
        {title: 'Kazan Ne İşe Yarar', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam harum asperiores voluptatum, pariatur minima ab '},
        {title: 'Kazan Ne İşe Yarar', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam harum asperiores voluptatum, pariatur minima ab '},
        {title: 'Kazan Ne İşe Yarar', desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam harum asperiores voluptatum, pariatur minima ab '},
    ])


    const handleClickSubImages = (i: number) => {
        setActiveImage(subImages[i].img);
    }

    console.log(activeImage);
  return (
    <div className=' my-2 flex flex-col gap-y-8 '>
        {/* TOP SİDE */}
        <div className=' border border-black w-full h-[580px] rounded-xl shadow-lg p-8 flex gap-10'>
            {/*SUB IMAGES */}
            <div className=' flex flex-col justify-between gap-y-4 h-full cursor-pointer '>
                {
                    subImages.map((item,i) => {
                        return(
                            <div onClick={() => handleClickSubImages(i)} key={i} className={`${activeImage == item.img ? 'border-2 border-darkDanger' : 'border border-black'} w-40 h-40 flex justify-center shadow-lg items-center bg-secondary rounded-xl`}>
                            <img src={item.img} alt={'subImg' + i} className=' w-20 h-20'/>
                        </div>
                        )
                    })
                }
            </div>
            
            {/* PRODUCT INFO */}
            <div className=' w-full flex justify-center flex-col gap-y-5 '>
                {/* TTTLE */}
                <div className='flex w-full justify-between px-72 '>
                    <p className=' font-bold text-xl tracking-wide'>Ürün Başlık</p>

                    <span className=' font-bold text-lg'>100₺</span>
                </div>
                {/* MAIN IMAGE */}
                <div className=' border border-black rounded-xl flex justify-center w-full h-full bg-secondary'>
                    <img src={activeImage} alt=""  className=' w-[600px] h-[400px] mt-10'/>
                </div>
            </div>
        </div>

        {/* BOTTOM SİDE */}
        <div>
            {/* DESCRİPTİON */}
            <div className=' border rounded-xl border-black h-[450px] bg-secondary shadow-lg p-4'>
                <p>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam harum asperiores voluptatum, pariatur minima ab incidunt nesciunt officiis corrupti explicabo a molestias iste ut nulla, ea facilis fugit voluptates adipisci rerum assumenda maiores ratione? Dolorem similique animi at veniam provident exercitationem repellat voluptatem eum consectetur, laudantium, voluptate atque modi voluptas rerum! Fugit unde, dolor animi veniam possimus dolores officia laboriosam ipsum dicta excepturi quo velit ullam in? Consectetur, doloremque repudiandae asperiores velit voluptates nam voluptas recusandae inventore facere ratione optio dolor sequi necessitatibus ex explicabo labore maxime totam ducimus deserunt voluptatum error. Officia rerum nesciunt, aspernatur totam accusantium magnam possimus expedita quas, iusto esse, adipisci eum id assumenda. Maxime, voluptatem quae accusamus laboriosam totam explicabo rerum voluptatibus commodi, saepe nesciunt temporibus sapiente dolorem, distinctio provident veniam praesentium libero omnis nam! Facere eos aperiam consectetur, quis pariatur dignissimos nemo voluptate molestiae veritatis odit? Commodi corrupti error, nostrum, illum atque distinctio dolore a quae facere unde dolorum tempora delectus! Sit, quos? Beatae ipsum eos iusto assumenda. Qui repellendus excepturi minima nobis porro, delectus enim exercitationem officia, quibusdam consectetur ullam, illo soluta. Maiores dolorem voluptas qui voluptatem, debitis omnis vel eligendi officia exercitationem tempora impedit earum ullam unde expedita explicabo soluta ipsum repudiandae possimus natus doloribus distinctio deleniti. Harum deleniti in doloribus numquam dolorum eligendi porro fugiat esse dolore illum ipsam, odio voluptate et accusamus quaerat odit assumenda! Nobis quia pariatur officia modi cumque tempore quae culpa rerum autem recusandae dicta saepe veritatis, alias nihil porro labore ipsum, architecto adipisci? Doloremque similique, ad mollitia harum veniam nesciunt id? Quis accusamus id sed velit rem reiciendis cupiditate explicabo sit, aliquam porro ut molestiae adipisci aliquid impedit inventore quos, hic molestias blanditiis facilis quidem. Sequi, eaque. Praesentium quibusdam sed consequuntur neque eaque! Eos sed reiciendis possimus magni unde labore recusandae ex minus enim porro.
                </p>
            </div>

             {/* INFO    */}
            <div className=' mt-8 flex flex-col gap-y-4'>
                {
                    subDesc.map((item, i) => (
                        <div className=' flex  flex-col gap-y-1'>
                            <div>
                                <h3 className=' text-lg'>{item.title}</h3>
                            </div>

                            <div className=' border border-black rounded-xl h-24 shadow-lg bg-secondary p-1 text-sm'>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

        <div className=' border border-darkDanger w-full'></div>
    </div>
  )
}

export default ProductDetail