import { Component, OnInit , AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-customers-list',
  templateUrl: './customers-list.component.html',
    providers: [NgbProgressbarConfig],
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements AfterViewInit{

  subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}
  //ngOnInit(){};
  ngAfterViewInit(){}

}

