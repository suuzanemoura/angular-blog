import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  constructor(private router: Router) { }

    ngOnInit() {

        this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationStart)) {
              return;
          }
          window.scrollTo(0, 0)
      });
    }
}
