export interface RickAndMortyResponse {
    results : RickAndMortySimple[];
}

export interface RickAndMortySimple{
    id : number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}