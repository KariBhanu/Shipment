import { DatePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { SharedService } from '../../sharedservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  // @Input() shipmentDetails: any;
  // @Output() shipmentdata = new EventEmitter();
  @ViewChildren('filterCheckbox') filterCheckbox: any;
  resultsCount: any;
  isFilterModalOpen: boolean = false;
  statuses = [
    { 'label': 'Ready for Backroom Pick', 'value': 'Ready for Backroom Pick' },
    { 'label': 'Backroom Pick in Progress', 'value': 'Backroom Pick in Progress' },
    { 'label': 'Ready for CustomerPick', 'value': 'Ready for CustomerPick' },
    { 'label': 'Ready for Packing', 'value': 'Ready for Packing' },
    { 'label': 'Packing in Progress', 'value': 'Packing in Progress' },
    { 'label': 'Packed', 'value': 'Packed' },
    { 'label': 'Shipped/Picked', 'value': 'Shipped/Picked' },
    { 'label': 'Cancelled', 'value': 'Cancelled' },
  ];

  checkedArray: any[] = []

  shipments: any;
  constructor(private router: Router, public sharedService: SharedService) {
    //this.shipments = this.sharedService.shipmentDetails.Shipments.Shipment;
  }

  ngOnInit() {
    this.getShipments();
  }
  summary(data: any) {
    //this.shipmentdata.emit(data);
    this.sharedService.selectedShipment = data;
    const body = {
      shipment_no: data.ShipmentKey
    }
    this.router.navigate(['/shipment', 'details'], { queryParams: body });
    this.sharedService.title = "Shipment Summary";
    this.sharedService.shipmentID = data.OrderNo;
  }

  openFilterModal() {
    this.isFilterModalOpen = !this.isFilterModalOpen;
    setTimeout(() => {
      this.filterCheckbox.toArray().forEach((element: any) => {
        if (this.checkedArray.some(criteria => criteria.label === element.nativeElement.id)) {
          element.nativeElement.checked = true
        }
      });
    }, 100)
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  checkboxChange(status: any) {
    const isPresent = this.checkedArray.findIndex(item => {
      return item.value === status.value
    });
    if (isPresent !== -1) {
      this.checkedArray.splice(isPresent, 1);
    } else {
      this.checkedArray.push(status);
    }
  }

  applyFilter() {
    this.closeFilterModal();
    if (this.checkedArray.length === 0) {
      this.shipments = this.getShipments();
    } else {
      this.shipments = this.shipments.filter((shipment: any) => {
        return this.checkedArray.some(criteria => criteria.value === shipment.Status);
      });
    }
    this.resultsCount = this.shipments.length;
  }

  resetFilters() {
    this.filterCheckbox.toArray().forEach((element: any) => {
      element.nativeElement.checked = false
    });
    this.checkedArray = [];
  }

  getShipments(): void {
    this.sharedService.getShipments()
      .subscribe((data: any) => {
        this.shipments = this.sharedService.filterShipments(data);
        this.resultsCount = this.shipments.length;
      });
  }

}
