import { Component, Input } from '@angular/core';
import { Shape } from '../defines';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

export class SquareComponent {

  @Input() value: Shape.X | Shape.O;

}
