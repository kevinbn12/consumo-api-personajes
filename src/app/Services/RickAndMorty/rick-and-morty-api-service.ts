import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyResponse } from '../../models/RickAndMortyModels/RickAndMortyListModel';
import { RickAndMortyDetailResponse } from '../../models/RickAndMortyModels/RickAndMortyDetailModel';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyApiService {
  private baseUrl : string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private _httpClient : HttpClient
  ){}

  getRickAndMortyList():Observable<RickAndMortyResponse>{
    return this._httpClient.get<RickAndMortyResponse>(`${this.baseUrl}`)
  }

  getRickAndMortyDetail(id:number):Observable<RickAndMortyDetailResponse>{
    return this._httpClient.get<RickAndMortyDetailResponse>(`${this.baseUrl}/${id}`)
  }
}
