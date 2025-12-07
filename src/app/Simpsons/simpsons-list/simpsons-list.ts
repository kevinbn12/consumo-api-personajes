import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SimpsonsApiService } from '../../Services/Simpsons/simpsons-api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simpsons-list',
  imports: [],
  templateUrl: './simpsons-list.html',
  styleUrl: './simpsons-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsList implements OnInit{
  protected results : any = {};
  protected id :number = 0


   constructor(
    private _simpsosApiService : SimpsonsApiService,
    private _cdr : ChangeDetectorRef,
    private _router : Router
   ){}

   ngOnInit(){
    this._simpsosApiService.getSimpsonsList().subscribe(simpsonsResponse => {
      this.results = simpsonsResponse.results
      this.id = simpsonsResponse.results.id
      this._cdr.markForCheck()
    })
  }

  navigateToDetail(id:number){
    this._router.navigate(['/Simpsons', id])
  }
}
