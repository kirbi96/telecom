import {IAlbums} from "../../types/types";
import { useHistory } from "react-router-dom";

const AlbumItem = (props: {data: IAlbums}) =>{
    const history = useHistory()
    const { id, title} = props.data

    const getToAlbum = () =>{
        history.push(`/album/${id}`)
    }

    return(
        <div className="col-4">
            <div style={{padding: 10}}>
                <div>Альбом номер {id}</div>
                <div>Название: {title}</div>
                <div onClick={() => getToAlbum()} className="btn btn-dark">Посмотреть</div>
            </div>
        </div>

    )
}

export default AlbumItem
