import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
          "ShipmentNo": "PICK1000002SHPNO",
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
  shipmentDetailsCopy = {
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
          "ShipmentNo": "PICK1000002SHPNO",
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
                    "ImageUrl": "../../../assets/pic.jpg",
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
  searchShipment: any;
  constructor() { }
}
