import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeServiceService} from "../service/employee-service.service";
import {EmployeeList} from "./employee-list";
import {NavigationExtras, Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Observable<EmployeeList[]>;


  constructor(private employeeService: EmployeeServiceService, private router : Router) {
  }
  getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeeList = data;
    });
  }

  editEmployee(employee){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "employee": JSON.stringify(employee)
      }
    };
    this.router.navigate(['employeeDetails'],navigationExtras )
  }
  deleteEmployee(employee){
   this.employeeService.deleteEmployee(employee.empId).subscribe(data=>{
      $("delete").modal("show");
   });
  }

  ngOnInit() {
    this.getEmployeeList();
  }

}
