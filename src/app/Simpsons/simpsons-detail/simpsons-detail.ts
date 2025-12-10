import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SimpsonsApiService } from '../../Services/Simpsons/simpsons-api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-simpsons-detail',
  imports: [],
  templateUrl: './simpsons-detail.html',
  styleUrl: './simpsons-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsDetail implements OnInit {
  protected id : number = 0
  protected  name : string = ''
  protected  age : number =0
  protected  birthdate : string = ''
  protected  gender : string = ''
  protected  status : string = ''
  protected  description : string = ''
  protected  ocupation:string = ''
  protected  phrases:string[]=[]

  constructor (
    private _simpsosApiService : SimpsonsApiService,
    private _activedRoute: ActivatedRoute,
    private _cdr : ChangeDetectorRef,
  ){}

  ngOnInit() {
    this._activedRoute.params.subscribe(params => {
      console.log(params['id'])
      this._simpsosApiService.getSimpsonsDetail(params['id']).subscribe(SimpsonsResponse=>{
        this.id = SimpsonsResponse.id
        this.name = SimpsonsResponse.name
        this.age = SimpsonsResponse.age
        this.birthdate = SimpsonsResponse.birthdate
        this.gender = SimpsonsResponse.gender
        this.status = SimpsonsResponse.status
        this.description = SimpsonsResponse.description
        this.ocupation = SimpsonsResponse.ocupation
        this.phrases = SimpsonsResponse.phrases
        this._cdr.markForCheck()
      })
    })
  }
}
