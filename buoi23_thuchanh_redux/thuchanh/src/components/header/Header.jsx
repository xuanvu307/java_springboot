import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="header d-flex align-items-center">
        <div className="container-fluid">
            <div className="d-flex justify-content-start align-items-center">
                <div className="logo">
                    <Link to={"/admin/course"}>
                        <img src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png" alt="logo" />
                    </Link>
                </div>
                <div className="menu">
                    <Link to={"/admin/course"} className="text-white ms-5">Danh sách khóa học</Link>
                    <Link to={"/admin/course/create"} className="text-white ms-3">Tạo khóa học</Link>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Header