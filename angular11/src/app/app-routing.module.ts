import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OneComponent} from './one/one.component';
import {PresentationComponent} from './presentation/presentation.component';
import {HOMEComponent} from './home/home.component';
import {TwoComponent} from './two/two.component';
import {OperatorComponent} from './operator/operator.component';
import {ServicesComponent} from './services/services.component';
const routes: Routes = [
  //{path:'',pathMatch:"full",redirectTo:"/home"},
  {path:'one',component:OneComponent},
  {path:'home',component:HOMEComponent},
  {path:'two',component:TwoComponent},
  {path:'presentation',component:PresentationComponent},
  {path:'services',component:ServicesComponent},
  {path:'operateurs',component:OperatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
