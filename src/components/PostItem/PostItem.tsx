import {IPost} from "../../types/types";

const PostItem = (props: {data: IPost}) =>{
    const {userId, id, body, title} = props.data
    return(
        <div style={{padding: 10}}>
            <div>Пост номер {id}</div>
            <div>Пользователь: {userId}</div>
            <div className="h5">Название: {title}</div>
            <div>{body}</div>
        </div>
    )
}

export default PostItem
