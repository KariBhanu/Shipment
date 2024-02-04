import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ShipmentComponent,
    ResultsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule
  ],
  providers: [DatePipe],
})
export class ShipmentModule { }
