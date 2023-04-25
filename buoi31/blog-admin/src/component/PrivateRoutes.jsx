import { Outlet } from "react-router-dom"

function PrivateRoutes() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PrivateRoutes