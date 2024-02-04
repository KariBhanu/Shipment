import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../sharedservice.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent implements OnInit {

  title: any = "Shipment Search Results";
  pageBool: boolean = true;
  shipmentData: any;

  shipmentDetails = {
    "Shipments": {
      "TotalNumberOfRecords": "2",
      "Shipment": [
        {
          "AssignedToUserId": "amgr",
          "Status": "Ready for Backroom Pick",
          "DeliveryMethod": "PICK",
          "ExpectedShipmentDate": "27-10-2018",
          "OrderNo": "PICK1000001",
          "ScacAndService": "",
          "ShipmentKey": "PICK1000001SHPKEY",
          "ShipmentNo": "PICK1000001SHPNO",
          "BillToAddress": {
            "FirstName": "John",
            "LastName": "Parks",
            "EmailID": "john@example.com",
            "Phonenumber": "1234567890",
            "AddressID": "200001",
            "AddressLine1": "987, Broadview Avenue",
            "AddressLine2": "",
            "City": "Omaha",
            "Country": "US",
            "State": "NE",
            "ZipCode": "68101",
            "PersonInfoKey": "1000002"
          },
          "ToAddress": {
            "FirstName": "Abby",
            "LastName": "Doyle",
            "EmailID": "adoyle@example.com",
            "DayPhone": "6478390821",
            "AddressID": "200002",
            "AddressLine1": "6849, Wolfe Road",
            "AddressLine2": "123",
            "City": "Sunnydale",
            "Country": "US",
            "State": "CA",
            "ZipCode": "94049",
            "PersonInfoKey": "100001"
          },
          "ShipmentLines": {
            "TotalNumberOfRecords": "2",
            "ShipmentLine": [
              {
                "Quantity": "2",
                "ShipmentLineKey": "PICK100001SHPLINEKEY",
                "OrderLine": {
                  "ItemDetails": {
                    "DisplayUnitOfMeasure": "Each",
                    "Description": "Frigidaire Window Air Conditioner 1200-BTU",
                    "ImageUrl": "<PATH_TO_IMAGE>",
                    "ItemID": "100001"
                  }
                }
              },
              {
                "Quantity": "2",
                "ShipmentLineKey": "PICK100002SHPLINEKEY",
                "OrderLine": {
                  "ItemDetails": {
                    "DisplayUnitOfMeasure": "Each",
                    "Description": "Hunter Regalia 60-in New Bronze Ceiling Fan",
                    "ImageUrl": "<PATH_TO_IMAGE>",
                    "ItemID": "100002 "
                  }
                }
              }
            ]
          }
        },
        {
          "AssignedToUserId": "amgr",
          "Status": "Ready for Backroom Pick",
          "DeliveryMethod": "PICK",
          "ExpectedShipmentDate": "27-10-2018",
          "OrderNo": "PICK1000001",
          "ScacAndService": "",
          "ShipmentKey": "PICK1000001SHPKEY",
          "ShipmentNo": "PICK1000001SHPNO",
          "BillToAddress": {
            "FirstName": "John",
            "LastName": "Parks",
            "EmailID": "john@example.com",
            "Phonenumber": "1234567890",
            "AddressID": "200001",
            "AddressLine1": "987, Broadview Avenue",
            "AddressLine2": "",
            "City": "Omaha",
            "Country": "US",
            "State": "NE",
            "ZipCode": "68101",
            "PersonInfoKey": "1000002"
          },
          "ToAddress": {
            "FirstName": "Abby",
            "LastName": "Doyle",
            "EmailID": "adoyle@example.com",
            "DayPhone": "6478390821",
            "AddressID": "200002",
            "AddressLine1": "6849, Wolfe Road",
            "AddressLine2": "123",
            "City": "Sunnydale",
            "Country": "US",
            "State": "CA",
            "ZipCode": "94049",
            "PersonInfoKey": "100001"
          },
          "ShipmentLines": {
            "TotalNumberOfRecords": "2",
            "ShipmentLine": [
              {
                "Quantity": "2",
                "ShipmentLineKey": "PICK100001SHPLINEKEY",
                "OrderLine": {
                  "ItemDetails": {
                    "DisplayUnitOfMeasure": "Each",
                    "Description": "Frigidaire Window Air Conditioner 1200-BTU",
                    "ImageUrl": "<PATH_TO_IMAGE>",
                    "ItemID": "100001"
                  }
                }
              },
              {
                "Quantity": "2",
                "ShipmentLineKey": "PICK100002SHPLINEKEY",
                "OrderLine": {
                  "ItemDetails": {
                    "DisplayUnitOfMeasure": "Each",
                    "Description": "Hunter Regalia 60-in New Bronze Ceiling Fan",
                    "ImageUrl": "<PATH_TO_IMAGE>",
                    "ItemID": "100002 "
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }

  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
  }

  shipmentCame(data: any) {
    this.title = "Shipment Summary";
    this.pageBool = false;
    this.shipmentData = data;
  }

  goBack() {
    if (this.pageBool) {
      this.router.navigate(['/home']);
    } else {
      this.title = "Shipment Search Results";
      this.pageBool = true;
    }
  }

  close() {
    this.router.navigate(['/home']);
  }
}
