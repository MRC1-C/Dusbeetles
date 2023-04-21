import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useOutlet, useParams } from 'react-router-dom';
import data from '@/mockdata.json'
import { RootState } from '@/store';
import Items from '@/component/Items';
import { setCurrentHeaderProductState, setCurrentHeaderState, setHeaderProductState } from '@/store/features/appStateSlice';
import { setDataProductCase } from '@/store/features/caseStateSlice';

const ProductCase = () => {
  const { caseid } = useParams();
  const dispatch = useDispatch();
  const { dataProductCase } = useSelector((state: RootState) => (state.caseState))
  const outlet = useOutlet()
  useEffect(() => {
    dispatch(setDataProductCase(data["Home"].filter(d => d.name == caseid)[0].product))
    dispatch(setHeaderProductState(data["Home"].filter(d => d.name == caseid)[0].product.map(dt => dt.name)))
    dispatch(setCurrentHeaderState(caseid + ''))
    decodeURIComponent(location.pathname.slice(1,)) == caseid && dispatch(setCurrentHeaderProductState(''))
  }, [dispatch, caseid, decodeURIComponent(location.pathname.slice(1,)) == caseid])
  return (
    <>
      {
        outlet ? outlet :
          dataProductCase.map(dt => <Items key={dt.name} name={dt.name} des={dt.des} url={Array.from(dt.url)[0]} />)
      }
    </>
  )
}

export default ProductCase