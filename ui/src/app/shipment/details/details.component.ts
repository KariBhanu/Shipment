import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../sharedservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  //@Input() shipmentdata: any;
  shipmentdata: any;
  hide: boolean = true;
  constructor(private route: ActivatedRoute, public sharedService: SharedService) {
    this.route.queryParams.subscribe(params => {
      console.log(params['shipment_no']); 
    });
   }

  ngOnInit() {
    this.shipmentdata = this.sharedService.selectedShipment;
  }

  hideInfo() {
    this.hide = !this.hide;
  }
}
