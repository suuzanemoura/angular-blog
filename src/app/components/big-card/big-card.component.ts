import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() bigCardId:string = '';
  @Input() bigCardDate:string = '';
  @Input() bigCardDescription:string = '';
  @Input() bigCardPhotoCover:string = '';
  @Input() bigCardPhotoAlt:string = '';
  @Input() bigCardTitle:string = '';
  @Input() buttonName:string = ''
}