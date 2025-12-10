import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SimpsonsApiService } from '../../Services/Simpsons/simpsons-api-service';
import { Router } from '@angular/router';
import { SimpsonsResponse } from '../../models/Simpsons/SimpsonsListModel';

@Component({
  selector: 'app-simpsons-list',
  imports: [],
  templateUrl: './simpsons-list.html',
  styleUrl: './simpsons-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsList implements OnInit {
  protected results: any[] = [];
  protected id: number = 0
  protected image : string = ""


  constructor(
    private _simpsosApiService: SimpsonsApiService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) { }

  ngOnInit() {
    this._simpsosApiService.getSimpsonsList().subscribe((simpsonsResponse: SimpsonsResponse) => {
      // Check if results is an array, if not, wrap it in an array
      this.results = Array.isArray(simpsonsResponse.results)
        ? simpsonsResponse.results
        : [simpsonsResponse.results];
      this.id = simpsonsResponse.results.id
      this.image = simpsonsResponse.results.portrait_path
      console.log(simpsonsResponse.results.portrait_path)
      this._cdr.markForCheck();
    });
  }

  navigateToDetail(id: number) {
    this._router.navigate(['/Simpsons', id])
  }
}
