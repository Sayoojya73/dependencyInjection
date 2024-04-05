import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getEmployeeDetails() {
    return [
      { id: 1, name: 'Nivedya', position: 'Software Engineer', department: 'Engineering' },
      { id: 2, name: 'Vivek', position: 'Product Manager', department: 'Product Management' },
      { id: 3, name: 'Neha', position: 'HR Manager', department: 'Human Resources' },
      { id: 4, name: 'Anjali', position: 'Sales Executive', department: 'Sales' },
      { id: 5, name: 'David', position: 'Marketing Specialist', department: 'Marketing' }
    ];
  }
}
