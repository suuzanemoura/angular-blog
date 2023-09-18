import { Component, OnInit } from '@angular/core';
import { designData } from 'src/app/data/data';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css']
})
export class RowCardComponent implements OnInit {
  buttonName:string = 'Learn more about'
  rowCardPhotoCover:string = ''
  rowCardPhotoCoverAlt:string = ''
  rowCardTitle:string = ''
  rowCardDescription:string = ''

  ngOnInit(): void {
    this.rowCardPhotoCover = designData.photoCover
    this.rowCardPhotoCoverAlt = designData.photoCoverAlt
    this.rowCardTitle = designData.title
    this.rowCardDescription = designData.description
  }
}
