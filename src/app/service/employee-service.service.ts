import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {
  }


  /* availableEmployeeList(pName: String): Observable<object> {
   return this.http.get(`${this.baseUrl}/availableEmployeeList/?projectName=${pName}`)}*/

  addEmployee(employee): Observable<object> {
     alert(JSON.stringify(employee));
    return this.http.post(this.baseUrl + "/addEmployee/", employee,
      {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  /* addEmployee(){
   return this.http.get(this.baseUrl + "/availableEmployeeList/");
   }*/
  getEmployeeList(): Observable< any > {
    return this.http.get(`${this.baseUrl}/availableEmployeeList`);
  }
  /*getEmployeeData(employeeDetails : EmployeeDetail) {
    let url = this.baseUrl+"availableEmployees"
    return this.http.get(url,employeeDetails);
  }

*/
 getEmployeesById(employeeId: number): Observable<object> {
   return this.http.get(`${this.baseUrl}/getEmployeeById/?empId=${employeeId}`)}

  deleteEmployee(empId): Observable<object> {
    let params = new HttpParams().set('employeeId',empId);
    return this.http.post(this.baseUrl + "/deleteEmployee/", params);
  }

}
