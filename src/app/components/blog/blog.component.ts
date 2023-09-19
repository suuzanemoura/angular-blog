import { Component, OnInit } from '@angular/core';
import { blogData } from 'src/app/data/data';

export interface card {
  cardId:string
  cardDate:string
  cardPhotoCover:string
  cardPhotoAlt:string
  cardTitle:string
  cardDescription:string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  borderBottom:string = 'small-card__border-bottom';
  borderNone:string = 'small-card__border-none';
  cards:card[] = []

  ngOnInit(): void {
    blogData.map((datacard) => {this.cards.push({cardId: datacard.id, cardDate: datacard.date, cardPhotoCover: datacard.photoCover, cardPhotoAlt: datacard.photoCoverAlt, cardTitle: datacard.title, cardDescription: datacard.description})})
  }
}