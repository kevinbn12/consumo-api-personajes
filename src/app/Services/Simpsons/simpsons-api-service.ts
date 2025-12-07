import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpsonsResponse } from '../../models/Simpsons/SimpsonsListModel';
import { SimpsonsDetailResponse } from '../../models/Simpsons/SimpsonsDetailModel';

@Injectable({
  providedIn: 'root',
})
export class SimpsonsApiService {
  private baseUrl : string = 'https://thesimpsonsapi.com/api/characters';

  constructor(
    private _httpClient : HttpClient
  ){}

  getSimpsonsList():Observable<SimpsonsResponse>{
    return this._httpClient.get<SimpsonsResponse>(`${this.baseUrl}`)
  }

  getSimpsonsDetail(id:number):Observable<SimpsonsDetailResponse>{
    return this._httpClient.get<SimpsonsDetailResponse>(`${this.baseUrl}/${id}`)
  }

}
