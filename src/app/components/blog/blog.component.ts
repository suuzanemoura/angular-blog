import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  borderBottom:string = 'small-card__border-bottom';
  borderNone:string = 'small-card__border-none';
  buttonName:string = 'More Posts';
}
