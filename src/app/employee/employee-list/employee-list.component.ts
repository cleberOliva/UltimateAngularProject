import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.const';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.employeeService.getAll().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      }, error => console.log(error)
    );
  }

  onUpdate(id: number){
    this.router.navigate(["/employee/update", id]);
  }

  onRemove(id: number){
    this.employeeService.delete(id).subscribe();
  }
}
