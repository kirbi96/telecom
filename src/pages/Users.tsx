import {useEffect, useState} from "react";
import Api from "../api/Api";
import UserItem from "../components/UserItem/UserItem";
import {IUser} from "../types/types";


const Users = () =>{
    const [users, setUsers] = useState([])

    const getUsers = () =>{
        Api.get("users").then((res) =>{
            setUsers(res.data)
        })
    }

    useEffect(() =>{
        getUsers()
    },[])

    return (
        <div className="col-12">
            <span className="h3">Пользователи:</span>
            <div className="row">
                {users.map((item: IUser) => <UserItem data={item}/>)}
            </div>
        </div>
    )
}

export default Users
