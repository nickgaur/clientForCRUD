import React, { useEffect, useState } from "react";
import './Form.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Form() {
    const nav = useNavigate()
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [data, setData] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://deployedapp1343.herokuapp.com/getdata/${id}`)
            .then((response) => {
                setUserId(response.data[0].id)
                setUserName(response.data[0].name)
            })
            .catch((error) => { throw error })
    }, [id])

    const idInputHandler = (e) => {
        setUserId(e.target.value)
    }
    const userNameInputHandler = (e) => {
        setUserName(e.target.value)
    }


    const postData = async (e) => {
        e.preventDefault();
        if (!userId || !userName) {
            alert("Please fill all the fields")
        }
        else {
            var user = {
                id: userId,
                name: userName
            }
            if (!id) {
                axios.post('https://deployedapp1343.herokuapp.com/create', user).then(() => {
                })
                    .catch((err) => { throw err })
                nav('/')
            }
            else {

                axios.put(`https://deployedapp1343.herokuapp.com/update/${id}`, user)
                    .then(() => {})
                    .catch((err) => { throw err })
                nav('/')
            }
        }
    }

    return (
        <form onSubmit={postData} method="POST">
            <label>
                id:
            </label>
            <br></br>
            <input type="text" name="id" value={userId || ""} onChange={idInputHandler} />
            <label>
                <br>
                </br>
                Name:
            </label>
            <br>
            </br>
            <input type="text" name="name" value={userName || ""} onChange={userNameInputHandler} />
            <br>
            </br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;