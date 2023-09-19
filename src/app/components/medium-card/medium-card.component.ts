import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent {
  @Input() border:string = ''
  @Input() mediumCardId:string = ''
  @Input() mediumCardPhotoCover:string = ''
  @Input() mediumCardPhotoCoverAlt:string = ''
  @Input() mediumCardDate:string = ''
  @Input() mediumCardTitle:string = ''
}
