import React, { useState } from 'react'


const HeroSections1: React.FC = () => {
    const subImages: string[] = [
        'https://s3-alpha-sig.figma.com/img/457b/46ef/8260cd938d0bd2438bb40caf965a064c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CeXUCzmdQZnNQU2THRVLto~1GpeoaoBogdRjSvJBv1t~A8hBpvAk9yO3kI2LvBlKTM~XJh1wUOgihtLKAJ9ms-jwhaG3SqR2panL1IZ4ZxsaQGH~0T5y76nvKdNdGm0n~1uVYdd4NrFytstH2ZTbGAJUbXLC3HFkSDZ6yMiJCSUDHIqxZvUZ8qbQluKkXcvEQayl0gU86teEY-LRemwf2TSyKmpY~Hjur6pgLzqXl~n~Af4KlABqVwgE~ia0Zs6q~ZoAfvj7KlZN8CxalvHx9mvOiLXFZ~yHy8heNdGQVHb2-0hoyMHa7UD5kclk3cbIs3o6EPABMx4UeUCvwuIESg__',
        'https://s3-alpha-sig.figma.com/img/b0af/e53e/a565e692690c758449418e9c41bba08f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U3ZnQyLI5OAeXVeE6CbsqvmHFE8LFfioll5Z78YmGPL7wxzonasLBQzGwBGgK1fsr1S0tMrvOkspLHSnp4W0NEjJyVZ1oGxRmna2y44UZ5mwXZIbTsCnYfcu76gc6ti4S9gjE87mpPsQHJXbeyCCsAAUA01pnH2OQb2vJ~Hu0QJTDP2784BoBlFFWT01pWWehxDV6gDJ~I1e6UewkVGKJECRMLJN7oco7uSYhafF5H8AaJZRcyk6Lsbc3g-Uk46LfVYRtKgtoNarzMNrTmqsyJxWUt81pJ618anqZtQfRmmOJMeisgsY-kx-SDt0EcJeronQRxmg3N6xxQ2SrXHrkA__',
        'https://s3-alpha-sig.figma.com/img/f888/e144/f77def461d78eb743de911393624ce5b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q09tRWteRedtLDju1AgGKw6stWjAK7LYG1V6c-3TOdMlQQgSdyqJEztUGRSullhke6qhlol4rifvZBUYbptcdXakpxeqYigvzoJaZ~aPQzfmm1urikjJz32aGC8V-SsyvZJWVLFlVc2Sm4otDcEqBVRpOK6oDjhr8ph0MAhYwD6dd2GE4tLRDZkDidGvrNmZbVJHObM6V6qda~PlQuihFVXO81UmDzYtTjlgSisZ1DgmdKlJt2Rxw8dYAb9xuFnQanEkPkvb2Ci5EoFyqIraaEzPz~2C~yY8cGY6nS~JYk5D9DjKX~ldNQIuOP862Ig4kTeIhnMUaH2pFKguoKg5ZQ__',
        'https://s3-alpha-sig.figma.com/img/7a26/ec72/495fb17a54e89902a34acb0929bc112b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qIjuaHkzAS0iYsnZEfizvCP00pq7hAIVqGSF7pe012zF0MGG27h7YeuclnK5WpP~vMWS6O8Ba1Bb5WgL14WW9oTUvzIludQhrV23r9D0BVNMT7Z-pNBuFig9FSrDdp49BDCPnn5YX8fyHI7jpXXfX5Kv1uCvxNTHu1XIpxJ5Uoh9bC5Wg-1cFspIxKXZBKAETdzZ8WksDxJiyb3S0ipXKYK0dh~OJRZanXa7xMA91AbYverstt8LWOo~KXhqrlz3RVQri12uLEq8q7Q~uDVxmcLXyH4hibcs94z~Q2P4b~IHx2gSSpGkbmGAZ6FkvM8P8L0xKi~NE2Um9bbHF0J6jg__'
       ];
    const [mainImage, setMainImage] = useState<string>(subImages[0]);


    const handleClickImage = (i: any) => {
        setMainImage(subImages[i]);
    }
  

  return (
    <div className='flex flex-col md:flex-row bg-secondary rounded-xl shadow-xl w-10/12 mx-auto bg-opacity-20 h-full md:h-[300px]'>
        <div className=' flex-[3] flex justify-center items-center'>
            <img src={mainImage} alt=""  className=' w-full h-[200px]'/>
        </div>

        <div className=' flex-[2] flex flex-col justify-between items-center my-8'>
            <h2 className=' font-bold text-darkDanger text-lg md:text-2xl border-darkDanger border-b-2 border-dashed'>Soğutma Tüneli Endüstiriyel</h2>
            <div className=' grid grid-cols-2 gap-x-5 gap-y-3'>
                {
                    subImages.map((item: string, i: number) => (
                        <img onClick={() => handleClickImage(i)} key={i} src={item} alt={item + i} className={`${mainImage === item ? 'w-24 p-2 cursor-pointer rounded h-20 border-2 border-darkDanger' : 'w-24 p-2 cursor-pointer rounded h-20 border-2'}`} />
                    ))
                }
            </div>
        </div>  
    </div>
  )
}

export default HeroSections1