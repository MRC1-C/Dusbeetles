import  { useEffect } from 'react'
import data from '@/mockdata.json'
import Items from '@/component/Items'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setDataHome } from '@/store/features/homeStateSlice';
import { useLocation, useOutlet } from 'react-router-dom';
import { setAppState, setCurrentHeaderProductState, setCurrentHeaderState, setHeaderProductState, setHeaderState } from '@/store/features/appStateSlice';
export const Home = () => {
  const { dataHome } = useSelector((state: RootState) => (state.homeState));
  const outlet = useOutlet()
  const dispatch = useDispatch();
  const location = useLocation()
  useEffect(() => {
    dispatch(setDataHome(data["Home"]));
    dispatch(setAppState('home'))
    dispatch(setHeaderState(data["Home"].map(dt => dt.name)))
    location.pathname == '/'&&dispatch(setHeaderProductState([]))&&dispatch(setCurrentHeaderState(''))&&dispatch(setCurrentHeaderProductState(''))
  }, [dispatch,location.pathname == '/'])
  return (
    <>
      {
        outlet ? outlet :
          <div className='flex flex-wrap'>
            {dataHome.map(dt => <Items row={0.5} key={dt.name} name={dt.name} url={dt.url} des={dt.des} />)}
          </div>
      }
    </>
  )
}
