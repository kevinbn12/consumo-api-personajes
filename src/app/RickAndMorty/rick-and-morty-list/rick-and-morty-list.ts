import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rick-and-morty-list',
  imports: [],
  templateUrl: './rick-and-morty-list.html',
  styleUrl: './rick-and-morty-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RickAndMortyList {

}
