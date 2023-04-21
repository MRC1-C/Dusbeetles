import { RootState } from '@/store'
import { setCurrentHeaderProductState } from '@/store/features/appStateSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductCaseDetail = () => {
    const { caseID } = useParams()
    const { dataProductCase } = useSelector((state: RootState) => state.caseState)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setCurrentHeaderProductState(caseID + ''))
    }, [dispatch, caseID])
    return (
      <div className='p-3'>
        {
          dataProductCase.filter(d => d.name == caseID)[0]?.url.map((u, idx) => <img className='w-full object-cover' key={idx} src={u} />)
        }
      </div>
    )
}

export default ProductCaseDetail