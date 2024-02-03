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

  searchForm:any;
  constructor(private router: Router,private sharedService:SharedService){

  }

  ngOnInit(){
    this.initSearchForm()
  }

  initSearchForm(){
    this.searchForm = new FormGroup({
        orderId: new FormControl(''),
        shipmentId: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        emailId: new FormControl(''),
        phoneNumber: new FormControl('')
      });
  }
  reset(){
    this.searchForm.patchValue({
        orderId: '',
            shipmentId: '',
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber: ''
      });
  }

  shipmentSearch(){

    this.sharedService.searchShipment = this.searchForm.value;
    this.router.navigate(['/shipment'],{ queryParams: this.searchForm.value });
  }

}
