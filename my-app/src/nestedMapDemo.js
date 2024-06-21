import axios from "axios";
import React,{useEffect,useState } from "react";
export default function NestedMapDemo(){
    const [apidata,setApidata]=useState([ ]);

    useEffect(()=> {
        axios.get("https://dummyjson.com/users").then((resp) => {
            console.log(resp.data.users);
            setApidata(resp.data.users);

        });
    },[]);
    return <div> This is an example for Nested map Component, address is the nested json object
        <table border="1px solid black">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {apidata.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                        {`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}, ${user.address.country}`}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>;
}