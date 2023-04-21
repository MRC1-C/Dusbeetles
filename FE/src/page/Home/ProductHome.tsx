import { setDataProductHome } from '@/store/features/homeStateSlice';
import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation, useOutlet, useParams } from 'react-router-dom';
import data from '@/mockdata.json'
import { RootState } from '@/store';
import Items from '@/component/Items';
import { setCurrentHeaderProductState, setCurrentHeaderState, setHeaderProductState } from '@/store/features/appStateSlice';

const ProductHome = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dataProductHome } = useSelector((state: RootState) => (state.homeState))
  const outlet = useOutlet()
  const location = useLocation()
  console.log()
  useEffect(() => {
    dispatch(setDataProductHome(data["Home"].filter(d => d.name == id)[0].product))
    dispatch(setCurrentHeaderState(id + ''))
    dispatch(setHeaderProductState(data["Home"].filter(d => d.name == id)[0].product.map(dt => dt.name)))
    decodeURIComponent(location.pathname.slice(1,)) == id && dispatch(setCurrentHeaderProductState(''))
  }, [dispatch, id, decodeURIComponent(location.pathname.slice(1,)) == id])
  return (
    <>
      {
        outlet ? outlet :
          dataProductHome.map(dt => <Items key={dt.name.toString()} name={dt.name} des={dt.des} url={Array.from(dt.url)[0]} />)
      }
    </>
  )
}

export default ProductHome