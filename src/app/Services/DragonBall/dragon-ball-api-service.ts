import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DragonBallResponse } from '../../models/DragonBall/DragonBallListModel';
import { Observable } from 'rxjs';
import { DragonBallDetailResponse } from '../../models/DragonBall/DragonBallDetailModel';

@Injectable({
  providedIn: 'root',
})
export class DragonBallApiService {
  baseUrl:string = 'https://dragonball-api.com/api/characters'

  constructor(
    private _httpClient:HttpClient
  ){}

  getDragonBallList():Observable<DragonBallResponse>{
    return this._httpClient.get<DragonBallResponse>(`${this.baseUrl}`)
  }

  getDragonBallDetail(id:number):Observable<DragonBallDetailResponse>{
    return this._httpClient.get<DragonBallDetailResponse>(`${this.baseUrl}/${id}`)
  }
}
