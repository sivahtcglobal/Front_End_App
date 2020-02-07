import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';
import {EmployeeDetail} from '../employee-detail/employee-detail';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  /*employeedetail: EmployeeDetail = new EmployeeDetail();
  private employeeDetails = new EmployeeDetail();
  private data;

  constructor(private employeeService : EmployeeServiceService) { }

  ngOnInit() {
    this.getEmpData(this.employeeDetails);
  }

  form = new FormGroup({
    empId : new FormControl(),
    empName : new FormControl(),
   });

   getEmpData(employeeDetails)
  {
      this.employeeService.getEmployeeData(this.employeeDetails).subscribe(
        response => {
          this.data = response;
        },
        error => {
          console.log("error while getting user Details");
        }
      );
  }

   searchForm(searchInfo)
   {
         this.employeeDetails.empId = this.EmpId.value;
         this.employeeDetails.empName= this.EmpName.value;
         this.getEmpData(this.employeeDetails);
   }

   get EmpId()
   {
     return this.form.get('empId');
   }
   get EmpName()
   {
     return this.form.get('empName');
   } */









  //empId : number;
  // employeedetails: EmployeeDetail ;

  // constructor(private route: ActivatedRoute,private router: Router,
  //             private employeeService: EmployeeServiceService){
  // }
  // ngOnInit() {
  //   this.employeedetails = new EmployeeDetail();
  //   this.empId= this.route.snapshot.params['empId'];
  // }
  // //   employeeDetails(empId){this.employeeService.getEmployee(this.empId)
  // //     .subscribe(data => {
  // //       this.employeedetails = data;
  // //       console.log(data);
  // //     this.isLoadingResults = false;
  // //     });
  // // }
  // // searchForm(){
  // //   this.employeeDetails(this.empId);
  // // }

  // list(){
  //   this.router.navigate(['employees']);
  // }
}
