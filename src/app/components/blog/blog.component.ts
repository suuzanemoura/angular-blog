import { Component, OnInit } from '@angular/core';
import { blogData } from 'src/app/data/data';

export interface smallCard {
  smallCardDate:string
  smallCardPhotoCover:string
  smallCardPhotoAlt:string
  smallCardTitle:string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  borderBottom:string = 'small-card__border-bottom';
  borderNone:string = 'small-card__border-none';
  smallCards:smallCard[] = []

  ngOnInit(): void {
    blogData.map((datacard) => {this.smallCards.push({smallCardDate: datacard.date, smallCardPhotoCover: datacard.photoCover, smallCardPhotoAlt: datacard.photoCoverAlt, smallCardTitle: datacard.title})})
  }
}