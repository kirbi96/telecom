import {IUser} from "../../types/types";

const UserItem = (props: {data: IUser}) =>{
    const {name, username, email, address} = props.data

    return(
        <div className="d-flex flex-column col-3" style={{padding: 10}}>
            <div>
                <div>Имя: {name}</div>
                <div>Ник: {username}</div>
                <div>Почта: {email}</div>
            </div>
            <div>
                <div>Адресс: {address.city}</div>
                <div>Улица: {address.street}</div>
            </div>
        </div>
    )
}

export default UserItem
