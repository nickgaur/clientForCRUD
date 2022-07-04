import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'


const Home = () => {
    const [data, setData] = useState([])
    const loadData = async () => {
        const response = await axios.get("https://deployedapp1343.herokuapp.com/getdata");
        setData(response.data)
    }
    useEffect(() => {
        loadData();
    }, [])
    const deleteHandler = async (id) => {
        const response = await axios.delete(`https://deployedapp1343.herokuapp.com/delete/${id}`);
        loadData();
    }
    return (
        <div className="container">
            <Link to="/addnew">
                <button>Add New</button>
            </Link>
            <div className="card">
                <h1>Employee Details</h1>
                <table>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        <Link to={`/update/${user.id}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete" onClick={() => { return deleteHandler(user.id) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home