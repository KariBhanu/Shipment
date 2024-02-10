import { Component } from '@angular/core';
import { SharedService } from './sharedservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getShipments();
  }

  getShipments(): void {
    this.sharedService.getShipments()
      .subscribe((data: any) => {
        this.sharedService.shipmentDetails = data;
        this.sharedService.shipmentDetails = data;
        this.sharedService.resultsCount = data.Shipments.Shipment.length;
      });
  }
}
