import PostItem from "../components/PostItem/PostItem";
import {useEffect, useState} from "react";
import Api from "../api/Api";
import {IPost} from "../types/types";

const Posts = () =>{
    const [posts, setPosts] = useState([])
    const [form, setForm] = useState({title: "", body: "", userId: 1, id: posts?.length + 1})

    const getPosts= () =>{
        Api.get("posts").then((res) =>{
            setPosts(res.data)
        })
    }

    const changeHandler = (e: any) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () =>{
        try {
            await Api.post("posts", {...form}).then((res) => {
                setForm({ title: "", body: "", userId: 1, id: posts?.length + 1})
            })
            getPosts()
            alert("Пост успешно отправлен")
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() =>{
        getPosts()
    },[])

    return (
        <div>

            <div className="col-12 d-flex flex-column">
                <span className="h3">Посты:</span>
                <input
                    placeholder="Название"
                    style={{marginTop: 10}}
                    value={form.title}
                    name="title"
                    type="text"
                    onChange={changeHandler}
                />
                <input
                    placeholder="Описание"
                    style={{marginTop: 10}}
                    value={form.body}
                    name="body"
                    type="text"
                    onChange={changeHandler}
                />
                <div className="btn btn-dark mt-2" onClick={registerHandler}>Отправить</div>
            </div>

            <div className="col-6 d-flex flex-column mt-2">

                {posts.map((item: IPost) => <PostItem data={item}/>)}
            </div>

        </div>
    )
}

export default Posts
