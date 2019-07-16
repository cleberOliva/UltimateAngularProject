import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/alert';
import { EmployeeService } from '../employee.service';
import { RegisterService } from 'src/app/register/register.service';
import { User } from 'src/app/register/user';

@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})
export class EmployeeFormsComponent implements OnInit {
  employeeForm: FormGroup;

  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authUtil: AuthUtilService,
    private alertService: AlertService,
    private employeeService: EmployeeService,
    private userService: RegisterService,
    private route: ActivatedRoute
  ) {
    if(!authUtil.isLogged()){
      this.alertService.error("Você precisa estar logado!");
      this.router.navigate(["/index"]);
    }

    this.userService.getUser().subscribe(
      (data: User) => {
        this.user = data;
      }, error => console.error(error)
    );
  }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  onSubmit(){
    console.log("Mais um Teste: " + this.user.id);
  }

  get f(){
    return this.employeeForm.controls;
  }
}
