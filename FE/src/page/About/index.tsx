import { setAppState, setHeaderProductState, setHeaderState } from '@/store/features/appStateSlice';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import data from '@/mockdata.json'
import { setDataAbout } from '@/store/features/aboutStateSlice';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const About = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        let id = ''
        dispatch(setAppState('about'))
        dispatch(setDataAbout(data["About"]))
        dispatch(setHeaderState(data["About"].map((dt, idx) => {
            if (idx == 0) id = dt.name
            return dt.name
        }
        )))
        dispatch(setHeaderProductState([]))
        navigate(id)
    }, [dispatch, location.pathname == '/about'])
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default About