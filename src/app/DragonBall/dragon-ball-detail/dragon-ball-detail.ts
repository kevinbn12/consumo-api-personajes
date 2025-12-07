import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DragonBallApiService } from '../../Services/DragonBall/dragon-ball-api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dragon-ball-detail',
  imports: [],
  templateUrl: './dragon-ball-detail.html',
  styleUrl: './dragon-ball-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallDetail implements OnInit{
  protected  id:number = 0
  protected  name:string = ''
  protected  ki:string = ''
  protected  maxki:string = ''
  protected  gender:string = ''
  protected  race:string = ''
  protected  description:string= ''
  protected  image:string= ''
  protected  affiliation:string = ''


  constructor(
    private _DragonBallApiService: DragonBallApiService,
    private _activatedRoute:ActivatedRoute,
    private _cdr:ChangeDetectorRef
  ){}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this._DragonBallApiService.getDragonBallDetail(params['id']).subscribe(DragonBallResponse=>{
        this.id=DragonBallResponse.id
        this.name=DragonBallResponse.name
        this.ki=DragonBallResponse.ki
        this.maxki=DragonBallResponse.maxKi
        this.gender=DragonBallResponse.gender
        this.race=DragonBallResponse.race
        this.description=DragonBallResponse.description
        this.image=DragonBallResponse.image
        this.affiliation=DragonBallResponse.affiliation
        this._cdr.markForCheck()
      })
    })
  }
}
