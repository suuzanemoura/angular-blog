import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent{
  @Input() border:string = ''
  @Input() smallCardId:string = '';
  @Input() smallCardDate:string = '';
  @Input() smallCardPhotoCover:string = '';
  @Input() smallCardPhotoAlt:string = '';
  @Input() smallCardTitle:string = '';
}
