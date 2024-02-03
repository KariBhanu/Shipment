import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() shipmentDetails: any;
  @Output() shipmentdata = new EventEmitter();

  shipments: any;


  constructor() { }

  ngOnInit() {
    this.shipments = this.shipmentDetails.Shipments.Shipment;
  }
  summary(data: any) {
    this.shipmentdata.emit(data);
  }
}
