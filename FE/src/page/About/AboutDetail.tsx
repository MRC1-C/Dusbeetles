import { RootState } from '@/store'
import { setCurrentHeaderState } from '@/store/features/appStateSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
    const { aboutId } = useParams()
    const { dataAbout } = useSelector((state: RootState) => (state.aboutState))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setCurrentHeaderState(aboutId + ''))
    },[dispatch, aboutId])
    return (
        <div className='p-3'>
            {dataAbout.filter(dt => dt.name == aboutId).map(d => <div>
                <div>{d.name}</div>
                <img className='w-full' src={d.url}/>
                <div>{d.des}</div>
            </div>)}
        </div>
    )
}

export default AboutDetail