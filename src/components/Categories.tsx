import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../Redux Toolkit/store"
import { useEffect } from "react";
import { fetchData } from "../Redux Toolkit/features/category/categorySlice";

function Categories() {
    const categories = useSelector((state: RootState) => state.category.value);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])
  return (
    <div>
        
    </div>
  )
}

export default Categories