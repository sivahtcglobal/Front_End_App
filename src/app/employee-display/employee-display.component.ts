import { Component} from '@angular/core';
import {EmployeeServiceService} from "../service/employee-service.service";

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent {

  availableEmployeesById: object;
  constructor(private employeeService: EmployeeServiceService, private employeeId:number) {

  }

  getEmployeesById(){

    this.employeeService.getEmployeesById(this.employeeId).subscribe(data => {
      console.log(data);
      this.availableEmployeesById = data;
    });
  }
  }


