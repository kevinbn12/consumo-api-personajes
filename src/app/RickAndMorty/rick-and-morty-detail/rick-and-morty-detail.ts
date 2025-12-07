import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../../Services/RickAndMorty/rick-and-morty-api-service';
import { ActivatedRoute } from '@angular/router';
import { location, origin } from '../../models/RickAndMortyModels/RickAndMortyDetailModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rick-and-morty-detail',
  imports: [DatePipe],
  templateUrl: './rick-and-morty-detail.html',
  styleUrl: './rick-and-morty-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyDetail implements OnInit {
  protected id: number = 0;
  protected name: string = '';
  protected status: string = '';
  protected species: string = '';
  protected type: string = '';
  protected gender: string = '';
  protected image: string = '';
  protected origin: origin = {name: ''};
  protected location: location = {name:''};
  protected created: string = '';

  constructor(
    private _getRickAndMortyService: RickAndMortyApiService,
    private _activedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._activedRoute.params.subscribe(params => {
      console.log(params['id'])
      this._getRickAndMortyService.getRickAndMortyDetail(params['id']).subscribe(RickAndMortyDetailResponse => {
        // console.log(RickAndMortyDetailResponse)
        this.name = RickAndMortyDetailResponse.name
        this.status = RickAndMortyDetailResponse.status
        this.species = RickAndMortyDetailResponse.species
        this.type = RickAndMortyDetailResponse.type
        this.gender = RickAndMortyDetailResponse.gender
        this.image = RickAndMortyDetailResponse.image
        this.origin = RickAndMortyDetailResponse.origin
        console.log(this.origin)
        this.location = RickAndMortyDetailResponse.location
        console.log(this.location)
        this.created = RickAndMortyDetailResponse.created
        this._cdr.markForCheck()
      })
    })
  }
}
