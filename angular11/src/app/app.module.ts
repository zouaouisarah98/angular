import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './services/services.component';
import { OperatorComponent } from './operator/operator.component';
import { FooterComponent } from './footer/footer.component';
import { HOMEComponent } from './home/home.component';
import { TwoComponent } from './two/two.component';





@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    PresentationComponent,
    ServicesComponent,
    OperatorComponent,
    FooterComponent,
    HOMEComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SlickCarouselModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
