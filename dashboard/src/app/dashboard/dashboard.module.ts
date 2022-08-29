import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from '../components/cards/cards.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    VehicleComponent,
    VehicleDataComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
