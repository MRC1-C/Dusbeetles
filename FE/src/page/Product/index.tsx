import  { useEffect } from 'react'
import data from '@/mockdata.json'
import Items from '@/component/Items'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useLocation, useOutlet } from 'react-router-dom';
import { setAppState, setCurrentHeaderProductState, setCurrentHeaderState, setHeaderProductState, setHeaderState } from '@/store/features/appStateSlice';
import { setDataProduct } from '@/store/features/productStateSlice';
export const Product = () => {
  const { dataProduct } = useSelector((state: RootState) => (state.productState));
  const outlet = useOutlet()
  const dispatch = useDispatch();
  const location = useLocation()
  useEffect(() => {
    dispatch(setDataProduct(data["Product"]));
    dispatch(setAppState('products'))
    dispatch(setHeaderState(data["Product"].map(dt => dt.name)))
    location.pathname == '/products'&&dispatch(setHeaderProductState([]))&&dispatch(setCurrentHeaderState(''))&&dispatch(setCurrentHeaderProductState(''))
  }, [dispatch, location.pathname == '/products'])
  return (
    <>
      {
        outlet ? outlet :
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {dataProduct.map(dt => <Items row={0.5} key={dt.name} name={dt.name} url={dt.url} des={dt.des} />)}
          </div>
      }
    </>
  )
}
