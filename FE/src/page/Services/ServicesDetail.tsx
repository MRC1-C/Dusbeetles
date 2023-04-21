import { RootState } from '@/store'
import { setCurrentHeaderState } from '@/store/features/appStateSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const ServicesDetail = () => {
    const { servicesId } = useParams()
    const { dataServices } = useSelector((state: RootState) => (state.servicesState))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setCurrentHeaderState(servicesId + ''))
    },[dispatch, servicesId])
    return (
        <div className='p-3'>
            {dataServices.filter(dt => dt.name == servicesId).map(d => <div>
                <div>{d.name}</div>
                <img className='w-full' src={d.url}/>
                <div>{d.des}</div>
            </div>)}
        </div>
    )
}

export default ServicesDetail