import {useEffect, useState} from "react";
import Api from "../api/Api";
import {IAlbums, IPost} from "../types/types";
import AlbumItem from "../components/AlbumItem/AlbumItem";

const Albums = () =>{
    const [albums, setAlbums] = useState([])

    const getAlbums= () =>{
        Api.get("albums").then((res) =>{
            setAlbums(res.data)
        })
    }

    useEffect(() =>{
        getAlbums()
    },[])


    return (
        <div className="col-12">
            <span className="h3">Альбомы:</span>
            <div className="row">
                {albums.map((item: IAlbums) => <AlbumItem data={item}/>)}
            </div>

        </div>
    )
}

export default Albums
