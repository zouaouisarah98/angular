import { Component, OnInit, NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private service:SharedService) { }
  PresentationList:any=[];
  public pres : any;
  PhotoFileName1:string="";//="global.png"
  PhotoFilePath1:string="";

  ngOnInit(): void {
    this.refreshPresentationList();
    
  }
  refreshPresentationList(){
    this.service.getPresList().subscribe(data=>{
      this.PresentationList=data;
      this.PhotoFileName1="equipedeploiement.png";
      this.PhotoFilePath1=this.service.PhotoUrl+this.PhotoFileName1;
    });
  }

}
