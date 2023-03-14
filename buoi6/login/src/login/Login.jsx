import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const login = async (e) => {
        e.preventDefault();
        if (username.trim() == '' || password.trim() == '') {
            alert('username và password không để trống')
        }
        try {
            const data = await fetch(`http://localhost:8080/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: `${username}`, password: `${password}` })
            })
            const dataJson = await data.json();
            if (data.status === 200) {
                setUser(dataJson);
            } else {
                alert(dataJson.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {user === null && <form onSubmit={login}>
                <div>
                    <label htmlFor="">TK:</label>
                    <input type="text" placeholder='Nhập tài khoản' value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">MK:</label>
                    <input type="text" placeholder='Nhập mật khẩu' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Đăng Nhập</button>
            </form>}

            {user !== null &&
                <div>
                    <h2>username: {user.username}</h2>
                    <h2>email: {user.email}</h2>
                    <br />
                    <br />
                    <div>avatar</div>
                </div>
            }
        </>
    )
}

export default Login