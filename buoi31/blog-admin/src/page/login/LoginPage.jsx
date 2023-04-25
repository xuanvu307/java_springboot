import React, { useState } from 'react'
import './LoginPage.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../app/service/authApi';
import { useSelector } from 'react-redux';


function LoginPage() {
    const { isAuthenticated } = useSelector(state => state.auth);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    // kiểm tra đã login chưa, nếu login rồi thì chuyển về trang chủ

    if (isAuthenticated) {
        return < Navigate to = "/admin/blogs/own-blog" />
    }
    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password })
            .unwrap()
            .then(() => {
                alert("Đăng nhập thành công")
                navigate("/admin/blogs/own-blog")
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="container">

            <form className="login" onSubmit={handleLogin}>
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Login</h1>
                    </div>

                    <div className="login-form">
                        <div className="control-group">
                            <input type="text" className="login-field" placeholder="username" id="login-name" value={email} onChange={e => setEmail(e.target.value)} />
                            <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                        </div>

                        <div className="control-group">
                            <input type="password" className="login-field" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" id="login-pass" />
                            <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                        </div>

                        <button type='submit' className="btn btn-primary btn-large btn-block" href="#">login</button>
                        <a className="login-link" href="#">Lost your password?</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default LoginPage