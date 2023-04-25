import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/slice/authSlice'

function Header() {
    const { auth } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/admin/login")
    }
    
    return (
        <div>
            <nav className="d-flex justify-content-end align-items-center px-3">
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.name}
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>
                            <Link className="dropdown-item" to={'/admin/blogs/own-blog'}>Trang chủ</Link>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header