import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
    //this.getShipments();
  }

  // getShipments(): void {
  //   this.sharedService.getShipments()
  //     .subscribe((data: any) => {
  //       this.sharedService.shipmentDetails = data;
  //       //this.sharedService.shipmentDetails = data;
  //       this.sharedService.resultsCount = data.Shipments.Shipment.length;
  //     });
  // }
}
