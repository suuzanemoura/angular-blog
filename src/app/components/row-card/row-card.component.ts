import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent {
  @Input() buttonName:string = 'Learn more about'
  @Input() rowCardPhotoCover:string = ''
  @Input() rowCardPhotoCoverAlt:string = ''
  @Input() rowCardTitle:string = ''
  @Input() rowCardDescription:string = ''
  @Input() rowCardDate:string = ''
  @Input() rowCardId:string = ''
}
