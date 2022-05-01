import { Component, OnInit } from '@angular/core';
import { UserService } from '../../api/user.service';
import { ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPage  implements OnInit {
  //public data: Data;
  public columns: any;
  public rows: any;

  groups: any = [];
  
  constructor(private countryList: UserService) { 
    this.columns = [
      { name: 'country' },
      { name: 'cases' },
      { name: 'deaths' },
    ];
  }

  ngOnInit() {
    this.countryList.getCountryReport().subscribe(data => {
      this.rows = data;
      this.groups = data;
      console.log(data);
    });
  }
  

}