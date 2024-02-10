import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  shipmentDetails: any;
  shipmentDetailsCopy: any;
  resultsCount: any;
  jsonDataUrl: any = "assets/shipments.json";
  searchShipment: any;
  selectedShipment:any;
  title: any = "Shipment Search Results";
  shipmentID:any;
  constructor(private http: HttpClient) { }

  getShipments() {
    return this.http.get(this.jsonDataUrl);
  }

  filterShipments(data: any) {
    const filterObject: any = this.searchShipment ? this.searchShipment : {
      OrderNo: '',
      ShipmentNo: '',
      FirstName: '',
      LastName: '',
      EmailId: '',
      Phonenumber: ''
    };
    return data.Shipments.Shipment.filter((shipment: any) => {
      return (
        (filterObject.OrderNo === "" || shipment.OrderNo.toLowerCase().includes(filterObject.OrderNo.toLowerCase())) &&
        (filterObject.ShipmentNo === "" || shipment.ShipmentNo.toLowerCase().includes(filterObject.ShipmentNo.toLowerCase())) &&
        (filterObject.FirstName === "" || shipment.BillToAddress.FirstName.toLowerCase().includes(filterObject.FirstName.toLowerCase())) &&
        (filterObject.LastName === "" || shipment.BillToAddress.LastName.toLowerCase().includes(filterObject.LastName.toLowerCase())) &&
        (filterObject.EmailId === "" || shipment.BillToAddress.EmailID.toLowerCase().includes(filterObject.EmailId.toLowerCase())) &&
        (filterObject.Phonenumber === "" || shipment.BillToAddress.Phonenumber.toLowerCase().includes(filterObject.Phonenumber.toLowerCase()))
      );
    });
  }
}