import {Component} from '@angular/core';
import {EmployeeServiceService} from "../service/employee-service.service";
import {FormBuilder, FormGroup, FormArray, Validators} from "@angular/forms";
import { employee} from "./employee";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  // @ViewChild('addEmployeeForm' , {static: true}) formValues;
  employee: employee = new employee();
  addEmployeeForm: FormGroup;
  submitted = false;



  constructor(public fb: FormBuilder,private employeeService: EmployeeServiceService,private activatedRoute: ActivatedRoute){
    this.reactiveForm();
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['employee']) {
          let emp = JSON.parse(params['employee']);
          this.addEmployeeForm.patchValue({
            empId : emp.empId,
            empName: emp.empName,
            designation: emp.designation,
            primaryWorkLocation: emp.primaryWorkLocation,
            officialEmailAddr: emp.officialEmailAddr,
            emailAddr: emp.emailAddr,
            extensionNumber: emp.extensionNumber,
            mobileNumber: emp.mobileNumber,
            addressLine: emp.addressLine,
            city: emp.city,
            state: emp.state,
            country: emp.country,
            pincode: emp.pincode,

          })
      }
    })
}

  reactiveForm() {
    this.addEmployeeForm = this.fb.group({
      empId: ['',Validators.required],
      empName: ['',Validators.required],
      designation: ['',Validators.required],
      primaryWorkLocation: ['',Validators.required],
      officialEmailAddr: ['',[Validators.required,Validators.email]],
      emailAddr: ['',[Validators.required,Validators.email]],
      extensionNumber: ['',Validators.required],
      mobileNumber: [null,Validators.required],
      addressLine: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
      pincode: [null,Validators.required],
      skills: this.fb.array([this.newSkill()]),
      projects: this.fb.array([this.newProject()])

    })
  }

/*  clear(){
    this.addEmployeeForm.reset();
  }*/

  get fval() {
    return this.addEmployeeForm.controls;
  }
  skillsArray(): FormArray {
    return this.addEmployeeForm.get('skills') as FormArray;
  }


  newSkill(): FormGroup {
    return this.fb.group({
      skillName: [''],
      experience: [null],
    })
  }
  addSkill() {
    this.skillsArray().push(this.newSkill());
  }

  removeSkill(i:number) {
    this.skillsArray().removeAt(i);
  }

  projectsArray(): FormArray {
    return this.addEmployeeForm.get('projects') as FormArray;
  }


  newProject(): FormGroup {
    return this.fb.group({
      projectName: ['',],
      reportingTo: [''],
      deliveryHead: ['']
    })
  }
  addProject() {
    this.projectsArray().push(this.newProject());
  }

  removeProject(i:number) {
    this.projectsArray().removeAt(i);
  }
  onSubmit(addEmployee) {
    this.submitted = true;
    if (this.addEmployeeForm.invalid) {
      return;
    }
    this.employeeService.addEmployee(this.addEmployeeForm.value)
      .subscribe(data => {
        console.log(data);
        addEmployee.reset();
      }, error => {
        console.log(error)
        addEmployee.reset();
      });
    alert('Saved successfully!');
    //document.getElementById("addEmployeeForm").onreset;
    // this.formValues.resetForm();
  }
  /*title = 'select-county';

  onCountrySelected($event: country) {
    console.log($event);
  }*/
  // onSubmit(editForm) {
  //   console.log(this.user);
  //   this.alertify.success('Profile Updated Successfully');
  //   editForm.reset(this.user);
  // }
}



