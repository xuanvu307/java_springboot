import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

function UserCreate() {
    const navigate = useNavigate();
    const [listAddress, setListAddress] = useState([]);

    const schema = yup.object({
        name: yup.string().required("Tên không để trống"),
        phone: yup.string().required("Phone không để trống"),
        email: yup.string().required("Email không để trống"),
        password: yup.string().required("Password không để trống")
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode: "all",
            defaultValues: {
                address: "Tỉnh Hà Giang"
            }
        });

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetch(`https://provinces.open-api.vn/api/p/`)
                const dataJson = await data.json()
                setListAddress(dataJson)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const createUser = async (data) => {
        try {
            const user = await fetch(`http://localhost:8080/api/v1/users`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            const userJson = await user.json();
            if (user.status === 200) {
                alert("tao user thanh cong")
                setTimeout(() => {
                    navigate(`/users/${userJson.id}`, { replace: true });
                }, 1000)
            } else {
                alert(userJson.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(createUser)}>
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="col-form-label">Name</label>
                                <input type="text" id="name" className="form-control" {...register("name")} />
                                <p>{errors.name?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email</label>
                                <input type="text" id="email" className="form-control" {...register("email")} />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Phone</label>
                                <input type="text" id="phone" className="form-control" {...register("phone")} />
                                <p>{errors.phone?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Address</label>
                                <select className="form-select" id="address" {...register("address")}>
                                    {listAddress.map((add) => (
                                        <option key={add.code} value={add.name}>{add.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Password</label>
                                <input type="text" id="password" className="form-control" {...register("password")} />
                                <p>{errors.password?.message}</p>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <Link to={"/users"}>Quay Lại</Link>
                            <button type="submit">Tạo User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserCreate