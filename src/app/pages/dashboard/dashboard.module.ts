import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserService } from '../../api/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    DashboardPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [DashboardPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserService]
})
export class DashboardPageModule {}
