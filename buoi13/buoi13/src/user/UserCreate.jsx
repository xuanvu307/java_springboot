import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

function UserCreate() {
    const navigate = useNavigate();
    const schema = yup.object({
        name: yup.string().required("ten khong de trong"),
        phone: yup.string().required("phone khong de trong"),
        email: yup.string().required("email khong de trong"),

    }).required();

    const {
        register, 
        handleSubmit, 
        formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "all"
      });

    const [listAddress, setListAddress] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("Thành phố Hà Nội");
    useEffect(() =>{
        const getData = async () => {
            const data = await fetch(`https://provinces.open-api.vn/api/p/`)
            const dataJson = await data.json()
            setListAddress(dataJson)
        }
        getData()
    },[])

    const handleAdd =async () =>{
        if(name.trim() == "" || phone.trim() == "" || email.trim() == "" || password.trim() == "") {
            alert("các trường không được để trống");
        }

        await fetch(`http://localhost:8080/api/v1/users`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' } ,
            body: JSON.stringify({name: `${name}`, email: `${email}` , address: `${address}`, phone: `${phone}`, password: `${password}`})
        })

        alert("tao user thanh cong")
        setTimeout(()=>{
            navigate(`users/${id}`)
        },2000)
    }
    const onSubmit = data => console.log(data);
  return (
    <div className="container mt-5 mb-5">
        <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onsubmit)}>
                <div className="bg-light p-4">
                    <div className="mb-3">
                        <label className="col-form-label">Name</label>
                        <input type="text" id="name" className="form-control" {...register("name")}  value={name} onChange={e => setName(e.target.value)}/>
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Email</label>
                        <input type="text" id="email" className="form-control" {...register("email")} value={email} onChange={e => setEmail(e.target.value)} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Phone</label>
                        <input type="text" id="phone" className="form-control" {...register("phone")} value={phone} onChange={e => setPhone(e.target.value)}/>
                        <p>{errors.phone?.message}</p>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Address</label>
                        <select className="form-select" id="address" value={address} {...register("address")} onChange={e => setAddress(e.target.value)}>
                            {listAddress.map((add) =>(
                                <option key={add.code} value={add.name}>{add.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Password</label>
                        <input type="text" id="password" className="form-control" {...register("password")} value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button type="submit"></button>
                </form>
                <div className="text-center mt-3">
                    <Link to={"/users"}>Quay Lại</Link>
                    <Link to={`/users`} onClick={handleAdd}>Tạo User</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCreate