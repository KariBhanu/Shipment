import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent implements OnInit{
  searchShipment: any;

  constructor(private route: ActivatedRoute,private sharedService:SharedService) { }

  ngOnInit() {
    // Retrieve the parameters from the route
    this.searchShipment = this.route.snapshot.queryParams;
    console.log(this.searchShipment,this.sharedService.searchShipment)
  }


}
