import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeToFind = "";
  employees: any = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  findEmployee() {
    if (this.employeeToFind === '') {
      this.getAllEmployees();
    } else {
      this.getEmployeeById();
    }
  }

  getEmployeeById() {
    this.employeeService.getEmployeeById(this.employeeToFind)
      .subscribe(
        (data) => {
          this.employees = [];
          this.employees.push(data);
        }, (err) => { },
        () => { })
  }

  getAllEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        (data) => {
          this.employees = data["employees"];
        }, (err) => { },
        () => { })
  }

}
