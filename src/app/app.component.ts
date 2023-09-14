import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'THE BLOG';
  borderBottom:string = 'small-card__border-bottom';
  borderNone:string = 'small-card__border-none';
}
