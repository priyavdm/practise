import { Component, OnInit } from '@angular/core';
import { ServiceService} from "../service.service";

@Component({
  selector: 'app-practiseservice',
  templateUrl: './practiseservice.component.html',
  styleUrls: ['./practiseservice.component.scss']
})
export class PractiseserviceComponent implements OnInit {
   
  dataList:any;
  constructor(public d:ServiceService){
        
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.dataList=this.d.getalldata();

  }
}
