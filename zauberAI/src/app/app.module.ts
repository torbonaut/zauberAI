import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerService } from './services/managers.service';
import { ClientService } from './services/clients.service';
import { CalculationService } from './services/calculate.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ManagerService, ClientService, CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
