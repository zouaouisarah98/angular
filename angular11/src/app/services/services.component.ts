import { Component, OnInit, NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private service:SharedService) { }

  ServicesList:any=[];
  public serv : any;
  PhotoFileName2:string="";//="global.png"
  PhotoFilePath2:string="";

  ngOnInit(): void {
    this.refreshServicsList();
    
  }
  refreshServicsList(){
    this.service.getServicesList().subscribe(data=>{
      this.ServicesList=data;
      this.PhotoFileName2="";
      this.PhotoFilePath2=this.service.PhotoUrl+this.PhotoFileName2;
    });
  }
}
