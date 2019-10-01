import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get('http://localhost:5000/api/employees');
  }

  getEmployeeById(id: any) {
    return this.http.get(`http://localhost:5000/api/employees/${id}`);
  }

}
