import axios from "axios";
import React,{useEffect,useState } from "react";
export default function Axios(){
    const [apidata,setApidata]=useState([ ]);

    useEffect(()=> {
        axios.get("https://reqres.in/api/users?page=2").then((resp) => {
            console.log(resp.data.data);
            setApidata(resp.data.data);

        });
    },[]);
    return  <div style={{ padding: '30px' }}> This is Axis Component
        <table border="1px solid black">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
            </tr>
            </thead>
            <tbody>
            {apidata.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>;
}