import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeGetComponent } from './components/employee/employee-get/employee-get.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { MatSelectModule } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from './core/services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentComponent } from './components/department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from './modules/material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeGetComponent,
    EmployeeEditComponent,
    EmployeesComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    SlimLoadingBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
