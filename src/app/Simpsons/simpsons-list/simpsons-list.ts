import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-simpsons-list',
  imports: [],
  templateUrl: './simpsons-list.html',
  styleUrl: './simpsons-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsList {

}
