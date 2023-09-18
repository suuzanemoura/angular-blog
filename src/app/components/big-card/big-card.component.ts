import { Component, OnInit } from '@angular/core';
import { blogData } from 'src/app/data/data';

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
    this.bigCardDate = blogData[0].date
    this.bigCardDescription = blogData[0].description
    this.bigCardPhotoCover = blogData[0].photoCover
    this.bigCardPhotoAlt = blogData[0].photoCoverAlt
    this.bigCardTitle = blogData[0].title
  }

}