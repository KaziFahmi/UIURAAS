import { useSelector,useDispatch } from 'react-redux'
import { NavLink, Outlet,Navigate,Route } from 'react-router-dom'
import { getUserProfile } from '../Redux/Slices/Auth/authActions'

const ProtectedRoute = () => {
  const { userToken,loading,userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  if (!userToken) {
    return (
        <Navigate to={{pathname:'/login'}}/>
    )
  }
  if(!userInfo && !loading){
    dispatch(getUserProfile());
  }
  if(loading){
    return <div>Loading...</div>
  }
  return <Outlet />
}

export default ProtectedRoute