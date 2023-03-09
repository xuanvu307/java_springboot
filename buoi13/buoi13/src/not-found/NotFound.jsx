import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="main container-fluid d-flex flex-column justify-content-center align-items-center overflow-hidden bg-light">
        <h2 className="mb-5">Không tìm thấy trang yêu cầu</h2>
        <Link to={"/users"} className="btn btn-info">Quay lại trang chủ</Link>
    </div>
  )
}

export default NotFound