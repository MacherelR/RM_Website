import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RM_Web';
  showNavigation : boolean | undefined;

  constructor(location: Location, router: Router) {
    router.events.subscribe(()=>{
      this.showNavigation = location.path() !== '';
    });
  }
}
