import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(name, password)
    }

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder='Enter name' value={name} onChange = {e => setName(e.target.value)}/>
            <input type="password" placeholder='Enter password' value={password} onChange = {e => setPassword(e.target.value)}/>
            <button type="submit">Regester</button>
        </form>
    )
}

export default Register