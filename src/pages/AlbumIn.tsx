import {useEffect, useState} from "react";
import Api from "../api/Api";

const AlbumIn = ({match}: any) =>{
    const {id} = match.params
    const [photo, setPhoto] = useState([])

    const getPhoto= () =>{
        Api.get("photos").then((res) =>{
            const myPhoto: any = []
            res.data.map( (item: any) => item.albumId === +id && myPhoto.push(item))
            setPhoto(myPhoto)
        })
    }

    useEffect(() =>{
        getPhoto()
    },[])

    return (
        <div className="col-12">
            <span className="h3">Альбом номер: {id}</span>
            <div className="row mt-2">
                {photo?.map((item: any) =>(
                    <div>
                        <img
                            style={{width: 300, height: 200}}
                            src={item.thumbnailUrl}
                        />
                        <div style={{marginTop: -50, maxWidth: 300}}>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AlbumIn
