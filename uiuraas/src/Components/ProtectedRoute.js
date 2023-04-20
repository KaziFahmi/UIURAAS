import { useSelector } from 'react-redux'
import { NavLink, Outlet,Navigate,Route } from 'react-router-dom'


const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
        <Navigate to={{pathname:'/login'}}/>
    )
  }

  return <Outlet />
}

export default ProtectedRoute