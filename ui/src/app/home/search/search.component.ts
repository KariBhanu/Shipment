import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../sharedservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  searchForm: any;
  constructor(private router: Router, private sharedService: SharedService) {

  }

  ngOnInit() {
    this.initSearchForm();
    this.sharedService.shipmentDetails = JSON.parse(JSON.stringify(this.sharedService.shipmentDetailsCopy));
  }

  initSearchForm() {
    this.searchForm = new FormGroup({
      OrderNo: new FormControl(''),
      ShipmentNo: new FormControl(''),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      EmailId: new FormControl(''),
      Phonenumber: new FormControl('')
    });
  }
  reset() {
    this.searchForm.patchValue({
      OrderNo: '',
      ShipmentNo: '',
      FirstName: '',
      LastName: '',
      EmailId: '',
      Phonenumber: ''
    });
  }

  shipmentSearch() {
    this.sharedService.searchShipment = this.searchForm.value;
    const filterObject = this.searchForm.value;
    this.sharedService.shipmentDetails.Shipments.Shipment = this.sharedService.shipmentDetailsCopy.Shipments.Shipment.filter(shipment => {
      return (
        (filterObject.OrderNo === "" || shipment.OrderNo.toLowerCase().includes(filterObject.OrderNo.toLowerCase())) &&
        (filterObject.ShipmentNo === "" || shipment.ShipmentNo.toLowerCase().includes(filterObject.ShipmentNo.toLowerCase())) &&
        (filterObject.FirstName === "" || shipment.BillToAddress.FirstName.toLowerCase().includes(filterObject.FirstName.toLowerCase())) &&
        (filterObject.LastName === "" || shipment.BillToAddress.LastName.toLowerCase().includes(filterObject.LastName.toLowerCase())) &&
        (filterObject.EmailId === "" || shipment.BillToAddress.EmailID.toLowerCase().includes(filterObject.EmailId.toLowerCase())) &&
        (filterObject.Phonenumber === "" || shipment.BillToAddress.Phonenumber.toLowerCase().includes(filterObject.Phonenumber.toLowerCase()))
      );
    });
    this.sharedService.shipmentDetails.Shipments.TotalNumberOfRecords = String(this.sharedService.shipmentDetails.Shipments.Shipment.length);
    this.router.navigate(['/shipment']);
  }

}
