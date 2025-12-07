import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../../Services/RickAndMorty/rick-and-morty-api-service';
import { RickAndMortySimple } from '../../models/RickAndMortyModels/RickAndMortyListModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rick-and-morty-list',
  imports: [],
  templateUrl: './rick-and-morty-list.html',
  styleUrl: './rick-and-morty-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyList implements OnInit{
  protected results : RickAndMortySimple[] = []

  constructor(
    private _rickAndMortyApiService : RickAndMortyApiService,
    private _cdr : ChangeDetectorRef,
    private _router : Router
  ){}

  ngOnInit(){
    this._rickAndMortyApiService.getRickAndMortyList().subscribe(RickAndMortyResponse => {
      this.results = RickAndMortyResponse.results
      this._cdr.markForCheck()
    })
  }

  navigateToDetail(id:number){
    this._router.navigate(['/RickAndMorty', id])
  }
}
