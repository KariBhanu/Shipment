import { DatePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { SharedService } from '../../sharedservice.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() shipmentDetails: any;
  @Output() shipmentdata = new EventEmitter();
  @ViewChildren('filterCheckbox') filterCheckbox: any;
  resultCount:any;

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
  constructor(private datePipe: DatePipe, public sharedService: SharedService) {
    this.shipments = this.sharedService.shipmentDetails.Shipments.Shipment;
  }

  ngOnInit() {
  }
  summary(data: any) {
    this.shipmentdata.emit(data);
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
      this.shipments = this.sharedService.shipmentDetails.Shipments.Shipment;
    } else {
      this.shipments = this.sharedService.shipmentDetails.Shipments.Shipment.filter((shipment: any) => {
        return this.checkedArray.some(criteria => criteria.value === shipment.Status);
      });
    }
  }

  resetFilters() {
    this.filterCheckbox.toArray().forEach((element: any) => {
      element.nativeElement.checked = false
    });
    this.checkedArray = [];
  }
}
