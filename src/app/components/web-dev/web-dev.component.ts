import { Component, OnInit } from '@angular/core';
import { blogData } from 'src/app/data/data';
import { card } from '../blog/blog.component';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {
  borderRight:string = 'medium-card__border-right';
  borderNone:string = 'medium-card__border-none';
  cards:card[] = []

  ngOnInit(): void {
    blogData.map((datacard) => {this.cards.push({cardId: datacard.id, cardDate: datacard.date, cardPhotoCover: datacard.photoCover, cardPhotoAlt: datacard.photoCoverAlt, cardTitle: datacard.title, cardDescription: datacard.description})})
  }
}
