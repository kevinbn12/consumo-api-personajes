export interface SimpsonsResponse{
    results:SimsonsSimple
}

export interface SimsonsSimple{
    id:number;
    name:string;
    age:number;
    status:string;
    gender:string;
    portrait_path:any
}
