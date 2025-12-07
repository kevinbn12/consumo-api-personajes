import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DragonBallApiService } from '../../Services/DragonBall/dragon-ball-api-service';
import { Router } from '@angular/router';
import { DragonBallItem } from '../../models/DragonBall/DragonBallListModel';

@Component({
  selector: 'app-dragon-ball-list',
  imports: [],
  templateUrl: './dragon-ball-list.html',
  styleUrl: './dragon-ball-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallList implements OnInit{
  public items: any = {};
  protected id: number = 0

  constructor(
    private _dragonBallApiService:DragonBallApiService,
    private _router:Router,
    private _cdr : ChangeDetectorRef
  ){}

  ngOnInit() {
    this._dragonBallApiService.getDragonBallList().subscribe(DragonBallList=>{
      console.log(DragonBallList);
      this.items = DragonBallList.items
      this.id = DragonBallList.items.id
      this._cdr.markForCheck()
    })
  }

  navigateToDetail(id:number){
    this._router.navigate(['/DragonBall',id])
  }
}
