import React from 'react'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom';

export type PropsItems = {
    row?: number,
    name: string,
    des?: string,
    url?: string,
}

const Items = (props: PropsItems) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(props.name)} className={`border-0 border-b-[1px] border-[#E2E2E2] border-solid`}>
            <div className='p-4 grid grid-cols-1 md:grid-cols-2'>
                <div className='col-span-1'>
                    <img src={props.url} className='object-cover w-full h-full rounded-xl' />
                </div>
                <div className='md:p-8 col-span-1'>
                    <div className='font-bold text-xl py-2'>{props.name}</div>
                    <div>{props.des}</div>
                </div>
            </div>
        </div>
    )
}

export default Items