export interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
}

export interface IAddress{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo
}

export interface IGeo{
    lat: string;
    lng: string;
}

export interface IPost{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IAlbums{
    userId: number;
    id: number;
    title: string;
}

export interface IPhoto{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
