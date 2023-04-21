import { Image } from 'antd'
import React from 'react'
import logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <div className='container mx-auto text-white'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row items-center justify-center p-3 border-b-[#202020] border-[0px] border-b-[1px] border-solid'>
          <Image preview={false} width={24} src={logo} />
          <div className='pl-2'>DUS BEETLES</div>
        </div>
        <div className='text-center p-3'>
          Copyright © DUS BEETLES All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer