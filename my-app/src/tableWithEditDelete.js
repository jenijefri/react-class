import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TableWithEditDelete() {
    const [apidata, setApidata] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({});
    const [newUser, setNewUser] = useState({ first_name: '', last_name: '', email: '' });

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then((resp) => {
            console.log(resp.data.data);
            setApidata(resp.data.data);
        });
    }, []);

    const handleEditClick = (user) => {
        setEditingId(user.id);
        setFormData(user);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveClick = () => {
        setApidata(apidata.map(user => (user.id === editingId ? formData : user)));
        setEditingId(null);
        setFormData({});
    };

    const handleCancelClick = () => {
        setEditingId(null);
        setFormData({});
    };

    const handleDeleteClick = (id) => {
        setApidata(apidata.filter(user => user.id !== id));
    };

    const handleAddUser = () => {
        const newUserWithId = { ...newUser, id: apidata.length + 1 };
        setApidata([...apidata, newUserWithId]);
        setNewUser({ first_name: '', last_name: '', email: '' });
    };

    const handleNewUserChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    return (
        <div className="style">
        
        <div className="container mt-5">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2"
                    name="first_name"
                    placeholder="First Name"
                    value={newUser.first_name}
                    onChange={handleNewUserChange}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    name="last_name"
                    placeholder="Last Name"
                    value={newUser.last_name}
                    onChange={handleNewUserChange}
                />
                <input
                    type="email"
                    className="form-control mb-2"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleNewUserChange}
                />
                <button className="btn btn-primary" onClick={handleAddUser}>Add</button>
            </div>
            <table className="table table-bordered">
                <thead className="thead-light">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {apidata.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            {editingId === user.id ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    value={formData.first_name || user.first_name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.first_name
                            )}
                        </td>
                        <td>
                            {editingId === user.id ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    value={formData.last_name || user.last_name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.last_name
                            )}
                        </td>
                        <td>
                            {editingId === user.id ? (
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email || user.email}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                user.email
                            )}
                        </td>
                        <td>
                            {editingId === user.id ? (
                                <>
                                    <button className="btn btn-success me-2" onClick={handleSaveClick}>Save</button>
                                    <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-warning me-2" onClick={() => handleEditClick(user)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteClick(user.id)}>Delete</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        
    );
}