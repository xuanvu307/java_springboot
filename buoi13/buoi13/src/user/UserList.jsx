import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function UserList() {
    const [users, setUsers] = useState([]);
    const [eventKey, setEventKey] = useState("");

    useEffect(() =>{
        const getData = async () => {
            const data = await fetch(`http://localhost:8080/api/v1/users`)
            const dataJson = await data.json()
            setUsers(dataJson)
        }
        getData()
    },[])

    const deleteUser =async (id) =>{
        await fetch(`http://localhost:8080/api/v1/users/${id}`, {
            method: "DELETE"
        })
        const newUsers = users.filter(e => e.id != id)
        setUsers(newUsers)
    }

    const searchByName = async(event) =>{
        if(event.key === "Enter"){
            const data = await fetch(`http://localhost:8080/api/v1/search?name=${eventKey}`);
            const dataJson = await data.json();
            setUsers(dataJson);
        } 
    }

  return (
    <div className="container mt-5 mb-5">
        <h2 className="text-center text-uppercase">Danh sách user</h2>

        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                    <Link to = {"create"} className="btn btn-warning">Tạo user</Link>
                    <input type="text" id="search" className="form-control w-50" placeholder="Tìm kiếm user" 
                        value={eventKey}   onChange={e => setEventKey(e.target.value)} onKeyDown = {searchByName}/>
                </div>
                <div className="bg-light p-4">
                    {users.length > 0 ?
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.phone}</td>
                                        <td>{u.address}</td>
                                        <td>
                                            <Link to = {`${u.id}`} href="" className="btn btn-success">Xem chi tiet</Link>
                                            <button className="btn btn-danger" onClick={() =>deleteUser(u.id)}>Xoa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>                       
                        </table>
                    : <h2>khong co du lieu</h2>}
                    <p className="message d-none"></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserList