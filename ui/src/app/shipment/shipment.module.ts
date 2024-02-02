import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class ShipmentModule { }
