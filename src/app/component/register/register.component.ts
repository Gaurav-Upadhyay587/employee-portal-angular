import { Component, OnInit } from '@angular/core';    
import { EmployeeService } from '../../service/employee.service';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     
  data = false;    
  employeeForm: FormGroup;    
  massage:string=''; 

  constructor(private formbulider: FormBuilder,private employeeService: EmployeeService) { }  

  ngOnInit() {    
    this.employeeForm = this.formbulider.group({    
      firstName: ['', [Validators.required]],    
      lastName: ['', [Validators.required]],    
      sex: ['', [Validators.required]],    
      Email: ['', [Validators.required]],    
      department: ['', [Validators.required]],
      dateOfBirth:['', [Validators.required]] 
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.employeeForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(user:any)    
  {    
  this.employeeService.createUser(user).subscribe(    
    response =>    
    { 
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.employeeForm.reset();    
    });    
  }    

}
