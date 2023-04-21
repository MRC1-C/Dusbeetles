import { setAppState, setHeaderProductState, setHeaderState } from '@/store/features/appStateSlice';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import data from '@/mockdata.json'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setDataServices } from '@/store/features/servicesStateSlice';

const Services = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        let id = ''
        dispatch(setAppState('services'))
        dispatch(setDataServices(data["Services"]))
        dispatch(setHeaderState(data["Services"].map((dt, idx) => {
            if (idx == 0) id = dt.name
            return dt.name
        }
        )))
        dispatch(setHeaderProductState([]))
        navigate(id)
    }, [dispatch, location.pathname == '/services'])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Services