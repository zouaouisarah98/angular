import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private service:SharedService) { }

  OperatorList:any=[];
  public oper : any;
  PhotoFileName3:string="";//="global.png"
  PhotoFilePath3:string="";

  ngOnInit(): void {
    this.refreshOperatorList();
    
  }
  refreshOperatorList(){
    this.service.getOperatorList().subscribe(data=>{
      this.OperatorList=data;
      this.PhotoFileName3="";
      this.PhotoFilePath3=this.service.PhotoUrl+this.PhotoFileName3;
    });
  }

}
