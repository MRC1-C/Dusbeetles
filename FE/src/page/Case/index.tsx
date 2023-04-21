import React, { useEffect } from 'react'
import data from '@/mockdata.json'
import Items from '@/component/Items'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useLocation, useOutlet } from 'react-router-dom';
import { setAppState, setCurrentHeaderProductState, setCurrentHeaderState, setHeaderProductState, setHeaderState } from '@/store/features/appStateSlice';
import { setDataCase } from '@/store/features/caseStateSlice';

const Case = () => {
    const { dataCase } = useSelector((state: RootState) => (state.caseState));
    const outlet = useOutlet()
    const dispatch = useDispatch();
    const location = useLocation()
    useEffect(() => {
        dispatch(setDataCase(data["Case"]));
        dispatch(setAppState('case'))
        dispatch(setHeaderState(data["Case"].map(dt => dt.name)))
        location.pathname == '/case' && dispatch(setHeaderProductState([])) && dispatch(setCurrentHeaderState('')) && dispatch(setCurrentHeaderProductState(''))
    }, [dispatch, location.pathname == '/case'])
    return (
        <>
            {
                outlet ? outlet :
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {dataCase.map(dt => <Items row={0.5} key={dt.name} name={dt.name} url={dt.url} des={dt.des} />)}
                    </div>
            }
        </>
    )
}

export default Case