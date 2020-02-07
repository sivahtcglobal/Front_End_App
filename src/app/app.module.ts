import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatSidenavModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatNativeDateModule,
  MatListModule, MatDividerModule, MatSelectModule, MatOptionModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SkillListComponent } from './skill-list/skill-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    SkillListComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserTransferStateModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    MatSelectCountryModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
