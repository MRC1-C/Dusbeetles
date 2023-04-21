import { RootState } from '@/store'
import { setCurrentHeaderProductState } from '@/store/features/appStateSlice'
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductProductDeltail = () => {
    const { productsID } = useParams()
    const { dataProductProduct } = useSelector((state: RootState) => state.productState)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setCurrentHeaderProductState(productsID + ''))
    }, [dispatch, productsID])
    return (
      <div className='p-3'>
        {
          dataProductProduct.filter(d => d.name == productsID)[0]?.url.map((u, idx) => <img className='w-full object-cover' key={idx} src={u} />)
        }
      </div>
    )
}

export default ProductProductDeltail