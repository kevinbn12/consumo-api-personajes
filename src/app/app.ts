import { Component } from '@angular/core';
import {Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{

  constructor(
    private _router : Router,
  ){

  }

  navigateToRickAndMortyList(){
    this._router.navigate(['RickAndMorty'])
  }
  navigateToSimpsonsList(){
    this._router.navigate(['Simpsons'])
  }
  navigateToDragonBallList(){
    this._router.navigate(['DragonBall'])
  }
}
