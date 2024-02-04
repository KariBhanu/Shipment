import { DatePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../sharedservice.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() shipmentDetails: any;
  @Output() shipmentdata = new EventEmitter();

  shipments: any;
  constructor(private datePipe: DatePipe, public sharedService: SharedService) {
    this.shipments = this.sharedService.shipmentDetails.Shipments.Shipment;
  }

  ngOnInit() {
  }
  summary(data: any) {
    this.shipmentdata.emit(data);
  }
}
