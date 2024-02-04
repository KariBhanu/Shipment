import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() shipmentdata: any;
  hide: boolean = true;
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  hideInfo() {
    this.hide = !this.hide;
  }
}
