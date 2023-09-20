import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input() title:string = ''

  constructor(private router:Router){}

  navigateSection(section:string) {
    this.router.navigate(['', section]);
  }

}
