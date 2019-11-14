import { Component, OnInit } from '@angular/core';    
import { EmployeeService } from '../../service/employee.service';    

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  data:[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {this.onLoadingForm() }    

  onLoadingForm() {
    this.employeeService.fetchEmployeeList().subscribe(    
      response=>    
      {    
        this.data = response;
        console.log('employee list: '+JSON.stringify(response)); 
      }); 
      this.data;
  }   
}
