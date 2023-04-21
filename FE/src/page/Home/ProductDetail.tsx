import { RootState } from '@/store'
import { setCurrentHeaderProductState } from '@/store/features/appStateSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { productID } = useParams()
  const { dataProductHome } = useSelector((state: RootState) => state.homeState)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentHeaderProductState(productID + ''))
  }, [productID, dispatch])
  return (
    <div className='p-3'>
      {
        dataProductHome.filter(d => d.name == productID)[0]?.url.map((u, idx) => <img className='w-full object-cover' key={idx} src={u} />)
      }
    </div>
  )
}

export default ProductDetail