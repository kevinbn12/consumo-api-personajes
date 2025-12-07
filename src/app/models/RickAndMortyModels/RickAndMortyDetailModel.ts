export interface RickAndMortyDetailResponse{
    id : number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: origin;
    location:location;
    created: string;
}

export interface location{
    name:any;
}
export interface origin{
    name:any;
   
}
