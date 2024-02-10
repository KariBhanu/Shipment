import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentComponent } from './shipment.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '', component: ShipmentComponent, children: [
      { path: '', redirectTo: 'results', pathMatch: 'full' }, // Default route to 'results'
      { path: 'results', component: ResultsComponent },
      { path: 'details', component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
