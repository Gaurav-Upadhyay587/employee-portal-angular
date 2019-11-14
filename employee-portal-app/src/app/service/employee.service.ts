import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'http://localhost:8080';
  employee: Employee;

  constructor(private http: HttpClient) {
      
     }

  ngOnInit() {  }

  createUser(user: any): Observable<any> {
    console.log(this.apiUrl);
    return this.http.post(
      this.apiUrl + '/employees/v1.0', user);
  }

  fetchEmployeeList(): Observable<any> {
	console.log(this.apiUrl);
    return this.http.get(this.apiUrl + '/employees/v1.1/filters/firstName_asc');
  }
}
