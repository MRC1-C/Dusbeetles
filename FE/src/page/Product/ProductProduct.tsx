import  { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useOutlet, useParams } from 'react-router-dom';
import data from '@/mockdata.json'
import { RootState } from '@/store';
import Items from '@/component/Items';
import { setCurrentHeaderProductState, setCurrentHeaderState, setHeaderProductState } from '@/store/features/appStateSlice';
import {  setDataProductProduct } from '@/store/features/productStateSlice';


const ProductProduct = () => {
    const { productsid } = useParams();
    const dispatch = useDispatch();
    const { dataProductProduct } = useSelector((state: RootState) => (state.productState))
    const outlet = useOutlet()
    useEffect(() => {
        dispatch(setDataProductProduct(data["Product"].filter(d => d.name == productsid)[0].product))
        dispatch(setHeaderProductState(data["Product"].filter(d => d.name == productsid)[0].product.map(dt => dt.name)))
        dispatch(setCurrentHeaderState(productsid + ''))
        decodeURIComponent(location.pathname.slice(1,)) == productsid && dispatch(setCurrentHeaderProductState(''))
    }, [dispatch, productsid, decodeURIComponent(location.pathname.slice(1,)) == productsid])
    return (
        < >
            {
                outlet ? outlet :
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {dataProductProduct.map(dt => <Items key={dt.name} name={dt.name} des={dt.des} url={Array.from(dt.url)[0]} />)}
                    </div>
            }
        </>
    )
}

export default ProductProduct