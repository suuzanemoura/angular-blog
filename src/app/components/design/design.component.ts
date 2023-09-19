import { Component, OnInit } from '@angular/core';
import { card } from '../blog/blog.component';
import { blogData } from 'src/app/data/data';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  cards:card[] = []

  ngOnInit(): void {
    blogData.map((datacard) => {this.cards.push({cardId: datacard.id, cardDate: datacard.date, cardPhotoCover: datacard.photoCover, cardPhotoAlt: datacard.photoCoverAlt, cardTitle: datacard.title, cardDescription: datacard.description})})
  }
}