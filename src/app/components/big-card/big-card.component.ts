import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  bigCardDate:string = '';
  bigCardDescription:string = '';
  bigCardPhotoCover:string = '';
  bigCardPhotoAlt:string = '';
  bigCardTitle:string = '';
  buttonName:string = 'Continue reading';

  ngOnInit(): void {
    this.bigCardDate = data[0].date
    this.bigCardDescription = data[0].description
    this.bigCardPhotoCover = data[0].photoCover
    this.bigCardPhotoAlt = data[0].photoCoverAlt
    this.bigCardTitle = data[0].title
  }

}
