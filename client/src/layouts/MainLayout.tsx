import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface IProps {
    children: ReactNode
}

const MainLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className=' w-11/12 mx-auto p-2'>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}

export default MainLayout