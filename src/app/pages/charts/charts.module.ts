import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { ChartsPageRoutingModule } from './charts-routing.module';

import { ChartsPage } from './charts.page';
import { UserService } from '../../api/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ChartsPageRoutingModule
  ],
  declarations: [ChartsPage],
  schemas: [],
  providers: [UserService]
})
export class ChartsPageModule {}
