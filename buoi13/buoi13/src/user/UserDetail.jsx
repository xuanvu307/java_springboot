import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, json } from 'react-router-dom'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

function UserDetail() {
    // lay ra id tren url
    let { userId } = useParams();
    const [listAddress, setListAddress] = useState([]);
    const [user, setUser] = useState(null);

    const URL = "http://localhost:8080/api/v1"

    const schema = yup.object({
        name: yup.string().required("Tên không để trống"),
        phone: yup.string().required("Phone không để trống"),
        email: yup.string().required("Email không để trống"),
        password: yup.string(),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password")], "Mật khẩu phải giống nhau")
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode: "all",
            values: {
                name: user?.name,
                email: user?.email,
                phone: user?.phone,
                address: user?.address,
            },
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

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetch(`${URL}/users/${userId}`)
                const dataJson = await data.json()
                setUser(dataJson);
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])

    const updateUser = async (data) => {
        try {
            await fetch(`${URL}/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: data.name, phone: data.phone, address: data.address })
            })
            alert("Cập nhật thành công")
        } catch (error) {
            console.log(error)
        }
    }

    const changeAvatar = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file)
        try {
            const rs = await axios.put(`${URL}/users/${userId}/update-avatar`, formData, {
                headers: { "Content-Type": "form-data" }
            })
            setUser({ ...user, avatar: rs.data.url });
        } catch (error) {
            console.log(error);
        }
    }

    const forgotPassword = async (e) => {
        e.preventDefault();
        await fetch(`${URL}/users/${userId}/reset-password`, {
            method: 'PUT'
        })
        alert("Mật khẩu mới được gửi đến email")
    }

    const changePassword = async (data) => {
        try {
            await fetch(`${URL}/users/${userId}/change-password`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data.password)
            })
            alert('Doi mat khau thanh cong')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Thông tin user: {user?.name}</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(updateUser)}>
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="col-form-label">Fullname</label>
                                <input type="text" id="fullname" className="form-control" {...register("name")} />
                                <p>{errors.name?.message}</p>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email</label>
                                <input type="text" id="email" className="form-control" {...register("email")} disabled />
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
                                <label className="form-label">Avatar</label>
                                <div className="avatar-preview mb-3 rounded">
                                    <img src={
                                        `http://localhost:8080/${user?.avatar}` ??
                                        `https://via.placeholder.com/200`
                                    } alt="avatar" id="avatar-preview" className="rounded" />
                                </div>

                                <label className="btn btn-warning" for="input">
                                    Chọn ảnh
                                </label>
                                <input type="file" id="input" className="d-none" onChange={e => changeAvatar(e)} />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Password</label>
                                <div className="">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#modal-change-password">
                                        Đổi mật khẩu
                                    </button>
                                    <button className="btn btn-warning" id="btn-forgot-password" onClick={forgotPassword}>
                                        Quên mật khẩu
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <Link to={"/users"}>Quay lại</Link>
                            <button type="submit" className="btn btn-success" id="btn-save" >Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <!-- Modal đổi mật khẩu--> */}
            <div className="modal fade" id="modal-change-password" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Đổi mật khẩu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit(changePassword)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="col-form-label">Mật khẩu cũ</label>
                                    <input type="text" id="old-password" className="form-control" {...register("password")} />
                                    <p>{errors.password?.message}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label">Mật khẩu mới</label>
                                    <input type="text" id="new-password" className="form-control" {...register("confirmPassword")} />
                                    <p>{errors.confirmPassword?.message}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                <button type="submit" className="btn btn-primary" id="btn-change-password">Xác nhận</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail