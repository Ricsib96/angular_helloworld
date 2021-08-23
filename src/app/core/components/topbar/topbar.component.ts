import { Component, OnInit } from '@angular/core';
import { NavBarItems } from '../../constants/topbaritems';
import { NavBarItem } from '../../models/navbaritem'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  private navbarItems = NavBarItems;

  constructor() { }

  ngOnInit(): void {
  }

  getNavbarItems():NavBarItem[]{
    return this.navbarItems;
  }

}
