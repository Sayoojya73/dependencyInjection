import { Component } from '@angular/core';
import { DataService} from '../data.service';
import { CommonModule } from '@angular/common';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})


export class EmployeeComponent {
  employees: Employee[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.employees = this.dataService.getEmployeeDetails();
  }

}
