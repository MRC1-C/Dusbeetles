import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Home } from '@/page/Home'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='bg-white flex-auto'>
                <div className='container mx-auto'>
                    <Outlet />
                </div>
            </div>
            <div className='bg-black'>
                <Footer />
            </div>
        </div>
    )
}

export default PublicLayout