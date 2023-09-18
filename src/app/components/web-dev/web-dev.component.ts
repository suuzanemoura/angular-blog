import { Component, OnInit } from '@angular/core';
import { tutorialWebDevData } from 'src/app/data/data';

export interface mediumCard {
  mediumCardDate:string
  mediumCardPhotoCover:string
  mediumCardPhotoAlt:string
  mediumCardTitle:string
}

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {
  borderRight:string = 'medium-card__border-right';
  borderNone:string = 'medium-card__border-none';
  mediumCards:mediumCard[] = []

  ngOnInit(): void {
    tutorialWebDevData.map((tutorialdata) => {this.mediumCards.push({mediumCardDate: tutorialdata.date, mediumCardPhotoCover: tutorialdata.photoCover, mediumCardPhotoAlt: tutorialdata.photoCoverAlt, mediumCardTitle: tutorialdata.title})})
  }
}
