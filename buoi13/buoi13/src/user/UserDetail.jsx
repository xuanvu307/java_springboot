import React, { useEffect, useState } from 'react'
import { useParams, Link, json } from 'react-router-dom'

function UserDetail() {
    // lay ra id tren url
    let {userId} = useParams();
    const [listAddress, setListAddress] = useState([]);
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState(user.address);

    useEffect(() =>{
        const getData = async () => {
            const data = await fetch(`https://provinces.open-api.vn/api/p/`)
            const dataJson = await data.json()
            setListAddress(dataJson)
        }
        getData()
    },[])

    useEffect(() => {
        const getUser = async () => {
            const data = await fetch(`http://localhost:8080/api/v1/users/${userId}`)
            const dataJson = await data.json()
            console.log(dataJson)
            setUser(dataJson);
        }
        getUser()
    },[])

    const updateUser = async() => {
        await fetch(`http://localhost:8080/api/v1/users/${userId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: {name}, phone : {phone}, address :{address}})
        })
        
    }
  return (
    <div className="container mt-5 mb-5">
        <h2 className="text-center text-uppercase mb-3">Thông tin user: {userId}</h2>

        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="bg-light p-4">
                    <div className="mb-3">
                        <label className="col-form-label">Fullname</label>
                        <input type="text" id="fullname" className="form-control" value={user.name} onChange = {e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Email</label>
                        <input type="text" id="email" className="form-control" value={user.email} disabled />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Phone</label>
                        <input type="text" id="phone" className="form-control" value={user.phone} onChange = {e => setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Address</label>
                        <select className="form-select" id="address" value={user.address} onChange = {e => setAddress(e.target.value)}>
                            {listAddress.map((add) =>(
                                <option key={add.code} value={add.name}>{add.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Avatar</label>
                        <div className="avatar-preview mb-3 rounded">
                            <img src="https://via.placeholder.com/200" alt="avatar" id="avatar-preview" className="rounded" />
                        </div>

                        <label className="btn btn-warning" for="input">
                            Chọn ảnh
                        </label>
                        <input type="file" id="input" className="d-none" />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Password</label>
                        <div className="">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#modal-change-password">
                                Đổi mật khẩu
                            </button>
                            <button className="btn btn-warning" id="btn-forgot-password">
                                Quên mật khẩu
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Link to={"/users"}>Quay lại</Link>
                    <button className="btn btn-success" id="btn-save" onClick={() => updateUser(userId)}>Cập nhật</button>
                </div>
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
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="col-form-label">Mật khẩu cũ</label>
                            <input type="text" id="old-password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Mật khẩu mới</label>
                            <input type="text" id="new-password" className="form-control" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" className="btn btn-primary" id="btn-change-password">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetail